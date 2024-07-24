import { useState, useEffect } from 'react';
import axios from 'axios';

const Albums = () => {
    const [ albums, setAlbums ] = useState([]);

    useEffect(() => {

        axios.get("./ALBUMS.json")
            .then(response => {
                console.log(response.data);
                setAlbums(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    })

    const AlbumCard = ({albums}) => {
        const mappedAlbums = albums.map((album, index) => {
            return (
                <div key={index} className="album-card">
                    <img src={album.cover_img} alt=""/>
                    <div className="album-info">
                        <h1> {album.album_name} </h1>
                        <h2>{album.artist}</h2>
                        <p>{album.release}</p>
                    </div>
                </div>
            );
        })
        return (
            <>
                {mappedAlbums}
            </>
        )
    }



  return (
    <>
        <div className="album-grid">
            <AlbumCard albums={albums}/>
        </div>
    </>
  )
}

export default Albums
