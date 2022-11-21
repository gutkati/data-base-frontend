import React, {useState} from "react";
import {Routes, Route} from "react-router-dom"
import Login from "./login/Login";
import Register from "./register/Register";
import Photo from "./photo/Photo";
import './App.css'
import PopupAddPhoto from "./popupAddPhoto/PopupAddPhoto";
import Movies from "./movies/Movies";
import PopupAddVideo from "./popupAddVideo/PopupAddVideo";

function App() {
    const loggedIn = true;
    const [isAddPhotoPopupOpen, setIsAddPhotoPopupOpen] = useState(false)
    const [isAddMoviesPopupOpen, setIsAddMoviesPopupOpen] = useState(false)



    const handleAddPhotoClick = () => {
        setIsAddPhotoPopupOpen(true)
    }
    const handleAddMoviesClick = () => {
        setIsAddMoviesPopupOpen(true)
    }

    const closeAllPopup = () => {
        setIsAddPhotoPopupOpen(false)
        setIsAddMoviesPopupOpen(false)
    }

  return (
    <div className="App">
      <Routes>
        <Route
            path='/register'
            element={<Register/>}
        />
        <Route
            path='/login'
            element={<Login/>}
        />
        <Route
            path='/photo'
            element={<Photo
                onAddPhoto={handleAddPhotoClick}
            />}
        />
        <Route
            path='/movies'
            element={<Movies
                onAddMovies={handleAddMoviesClick}
            />}
        />

      </Routes>
        <PopupAddPhoto
            isOpen={isAddPhotoPopupOpen}
            onClose={closeAllPopup}
        />

        <PopupAddVideo
            isOpen={isAddMoviesPopupOpen}
            onClose={closeAllPopup}
        />
    </div>
  );
}

export default App;
