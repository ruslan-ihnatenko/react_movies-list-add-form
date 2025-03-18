import React, { useState } from 'react';
import { TextField } from '../TextField';
import { Movie } from '../../types/Movie';

interface Props {
  onAdd: ({ ...data }: Movie) => void;
}

export const NewMovie: React.FC<Props> = ({ onAdd }) => {
  // Increase the count after successful form submission
  // to reset touched status of all the `Field`s
  const [count, setCount] = useState(0);

  const [hasTitleError, setTitleError] = useState(true);
  // const [hasDescriptionError, setDescriptionError] = useState(true);
  const [hasImgUrlError, setImgUrlError] = useState(true);
  const [hasImdbUrlError, setImdbUrlError] = useState(true);
  const [hasImdbIdError, setImdbIdError] = useState(true);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [imdbUrl, setImdbUrl] = useState('');
  const [imdbId, setImdbId] = useState('');

  const handleTitleChange = (newValue: string) => {
    setTitle(newValue);
    setTitleError(!newValue);
  };

  const handleDescriptionChange = (newValue: string) => {
    setDescription(newValue);
    // setDescriptionError(!newValue);
  };

  const handleImgUrlChange = (newValue: string) => {
    setImgUrl(newValue);
    setImgUrlError(!newValue);
  };

  const handleImdbUrlChange = (newValue: string) => {
    setImdbUrl(newValue);
    setImdbUrlError(!newValue);
  };

  const handleImdbIdChange = (newValue: string) => {
    setImdbId(newValue);
    setImdbIdError(!newValue);
  };

  const reset = () => {
    setTitle('');
    setDescription('');
    setImdbId('');
    setImdbUrl('');
    setImgUrl('');

    setTitleError(true);
    // setDescriptionError(true);
    setImdbIdError(true);
    setImdbUrlError(true);
    setImdbIdError(true);
  };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!title || !imdbUrl || !imgUrl || !imdbId) {
      return;
    }

    setCount(count + 1);

    onAdd({
      title,
      description,
      imgUrl,
      imdbUrl,
      imdbId,
    });

    reset();
  }

  return (
    <form className="NewMovie" key={count} noValidate onSubmit={handleSubmit}>
      <h2 className="title">Add a movie</h2>

      <TextField
        name="title"
        label="Title"
        value={title}
        onChange={handleTitleChange}
        required
      />

      <TextField
        name="description"
        label="Description"
        value={description}
        onChange={handleDescriptionChange}
      />

      <TextField
        name="imgUrl"
        label="Image URL"
        value={imgUrl}
        onChange={handleImgUrlChange}
        required
      />

      <TextField
        name="imdbUrl"
        label="Imdb URL"
        value={imdbUrl}
        onChange={handleImdbUrlChange}
        required
      />

      <TextField
        name="imdbId"
        label="Imdb ID"
        value={imdbId}
        onChange={handleImdbIdChange}
        required
      />

      <div className="field is-grouped">
        <div className="control">
          <button
            type="submit"
            data-cy="submit-button"
            className="button is-link"
            disabled={
              // hasDescriptionError ||
              hasImdbIdError ||
              hasImdbUrlError ||
              hasImgUrlError ||
              hasTitleError
            }
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};
