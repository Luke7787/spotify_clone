import { Album } from "../models/album.model.js";
import { Song } from "../models/song.model.js";
import { User } from "../models/user.model.js";

export const getStats = async (req, res, next) => {

    try {

      // Optimizing code instead of waiting for each one to finish fetching before moving on to the next

      // const totalSongs = await Song.countDocuments();
      // const totalUsers = await User.countDocuments();
      // const totalAlbum = await Album.countDocuments();

      const [totalSongs, totalUsers, totalAlbum, uniqueArtists] = await Promise.all([
        Song.countDocuments(),
        User.countDocuments(),
        Album.countDocuments(),

        // aggregate allows you do data manipulation in order of function calls
        // fetch all the songs & albums and combine them, group them by unique artist and then finally count the number of artist
        Song.aggregate([
          {
            $unionWith:{
              coll:"albums",
              pipeline:[]
            }
          },
          {
            $group:{
              _id:"$artist",
            }
          },
          {
            $count: "count",
          }
        ])
      ]);

      res.status(200).json({
        totalAlbum,
        totalSongs,
        totalUsers,
        totalArtist: uniqueArtists[0]?.count || 0
      })

    } catch (error) {
        
      next(error);

    }
};