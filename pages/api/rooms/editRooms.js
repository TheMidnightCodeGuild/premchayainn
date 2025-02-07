import Room from '../../../models/Room';
import connectToDatabase from '../../../lib/mongoose';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await connectToDatabase();
    
    const { roomId, roomType, isAC, price, totalRooms, description, amenities, maxOccupancy } = req.body;

    if (!roomId) {
      return res.status(400).json({ message: 'Room ID is required' });
    }

    const updateData = {};
    
    if (roomType) updateData.roomType = roomType;
    if (isAC !== undefined) updateData.isAC = isAC;
    if (price) updateData.price = parseFloat(price);
    if (totalRooms) updateData.totalRooms = parseInt(totalRooms);
    if (description) updateData.description = description;
    if (amenities) updateData.amenities = amenities;
    if (maxOccupancy) updateData.maxOccupancy = parseInt(maxOccupancy);

    const room = await Room.findByIdAndUpdate(
      roomId,
      updateData,
      { new: true, runValidators: true }
    );

    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }

    return res.status(200).json({
      message: 'Room updated successfully',
      room
    });

  } catch (error) {
    console.error('Error updating room:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
