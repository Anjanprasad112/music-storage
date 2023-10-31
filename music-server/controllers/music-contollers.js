const Music = require('../model/Music');


const getAllMusic = async (req,res,next) => {
    let music;
    try{
        music = await Music.find();
    }
    catch(err){
        console.log(err);
    }
    if(!music){
        return res.status(404).json({message: 'Music not found'});
    }
    res.status(200).json({music});
}

const getById = async (req,res,next) => {
    const musicId = req.params.id;
    let music;
    try{
        music = await Music.findById(musicId);
    }
    catch(err){
        console.log(err);
    }
    if(!music){
        return res.status(404).json({message: 'Music not found'});
    }
    res.status(200).json({music});
}


const addMusic = async (req,res,next) => {
    const {title, lyrics} = req.body;
    const newMusic = new Music({
        title,lyrics
    });
    try{
        await newMusic.save();
    }
    catch(err){
        console.log(err);
    }
    res.status(201).json({newMusic});
}

const updateMusic = async (req, res, next) => {
    const musicId = req.params.id;
    const { title, lyrics } = req.body;
    let music;
    try {
        music = await Music.findByIdAndUpdate(musicId,{
           title,lyrics
        });
        music = await music.save();
    } catch (err) {
        console.log(err);
    }
    if (!music) {
        return res.status(404).json({ message: "Music not found" });
    }   
    res.status(200).json({ music });
}
const deleteMusic = async (req, res, next) => {
    const musicId = req.params.id;
    let music;
    try {
        music = await Music.findByIdAndDelete(musicId);
    } catch (err) {
        console.log(err);
    }
    if (!music) {
        return res.status(404).json({ message: "Music not found" });
    }
    res.status(200).json({ message: "Music deleted" });
}
    
exports.addMusic = addMusic;
exports.getAllMusic = getAllMusic;
exports.getById = getById;
exports.updateMusic = updateMusic;
exports.deleteMusic = deleteMusic;