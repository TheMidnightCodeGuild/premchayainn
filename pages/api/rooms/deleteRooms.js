import Room from '../../../models/Room';
import connectToDatabase from '../../../lib/mongoose';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await connectToDatabase();
    
    const { roomId } = req.body;

    if (!roomId) {
      return res.status(400).json({ message: 'Room ID is required' });
    }

    const room = await Room.findByIdAndDelete(roomId);

    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }

    return res.status(200).json({ 
      message: 'Room deleted successfully',
      deletedRoom: room
    });

  } catch (error) {
    console.error('Error deleting room:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
