import React, { useState } from 'react';
import axios from 'axios';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
const api = axios.create({
  baseURL: 'http://localhost:3344/news/',
});
function EditArticle() {
  const navigate = useNavigate();

  let handleDelete = (e) => {
    e.preventDefault();
    api.delete(`/${id}`)
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        });

        navigate(`/`)

};
  let handleSubmit = (e) => {
    e.preventDefault();
   axios.patch(`http://localhost:3344/news/${id}`,
    
    {
      title,      
      description,
      imgUrl

        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        
};
    const [title, setTitle] = useState();
    const [queryParameter] = useSearchParams()
    let id = queryParameter.get('id')
    const [description, setDescription] = useState();
    const [imgUrl, setImgUrl] = useState();
    React.useEffect(() => {

      api.get(`${id}`).then((res) => {
          setTitle(res.data.title);
          setDescription(res.data.description);
          setImgUrl(res.data.imgUrl);
      });

      return () => {};
  }, []);
   
    return (
        <div className="flex flex-col container gap-2 mx-auto">
            <h1>Edit Article</h1>
            <label htmlFor="title" className='text-xl'>Title:</label>
            <textarea
                type="text"
                id="title"
                placeholder="Enter Title"
                name="title"
                className="border p-4"
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value)
                }}
            />
            <label htmlFor="description">Description</label>
            <input
                type="text"
                id="description"
                placeholder="Enter Description"
                name="description"
                className="border"
                value={description}
                onChange={(e) => {
                    setDescription(e.target.value);
                }}
            />
            <label htmlFor="title">Img Source</label>
            <input
                type="text"
                id="imgUrl"
                placeholder="Enter Img Source"
                name="imgUrl"
                className="border"
                value={imgUrl}
                onChange={(e) => {
                    setImgUrl(e.target.value);
                }}
            />
            <div className='flex border border-red-300'>
              <span className='p-6'>Image Preview:</span>
            <img className='w-1/3 my-6' src={imgUrl} />
            </div>
            <div className="mx-auto container ">
                <form>
                   <Link to='/'>
                    <button className="mx-4 border shadow w-1/5">
                    Cancel</button></Link>
                    <button onClick={handleDelete} className="mx-4 border bg-red-600 text-white shadow w-1/5">
                        Delete
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="hover:bg-green-500 mx-4 border shadow bg-green-600 text-white w-1/5"
                    >
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EditArticle;
