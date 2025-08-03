import { Request, Response } from 'express';
import Note from '../models/Note.ts';

export const getAllNotes = async (
  _: Request,
  res: Response,
): Promise<Response> => {
  try {
    const notes = await Note.find().sort({createdAt: -1}); // newest first
    res.status(200).json(notes);
  } catch (error) {
    console.error('Error in getAllNotes controller', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
  return res;
};

export const getNoteById = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({success: false, message: "Note not found."});

    res.status(200).json(note);
  } catch (error) {
    console.error('Error in getNoteById controller', error);
    res.status(500).json({ success: false, message: error });
  }
  return res;
}

export const createNote = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });

    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.error('Error in createNote controller', error);
    res.status(500).json({ success: false, message: error });
  }
  return res;
};

export const updateNote = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const {title, content} = req.body;
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title, content}, {new: true});

    if (!updatedNote) return res.status(404).json({success: false, message: "Note not found."});

    res.status(200).json(updatedNote);
  } catch (error) {
    console.error('Error in updateNote controller', error);
    res.status(500).json({ success: false, message: error });
  }
  return res
};

export const deleteNote = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
   const deletedNote = await Note.findByIdAndDelete(req.params.id);

   if (!deletedNote) return res.status(404).json({success: false, message: "Note not found."});

   res.status(200).json({message: "Note deleted successfully."});
  } catch (error) {
    console.error('Error in deleteNote controller', error);
    res.status(500).json({ success: false, message: error });
  }
  return res;
};
