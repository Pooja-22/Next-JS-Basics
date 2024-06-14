import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

interface FormState {
  author: string;
  title: string;
  content: string;
}

export default function CreatePost() {
  const [form, setForm] = useState<FormState>({
    author: '',
    title: '',
    content: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/posts', form);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="formContainer" onSubmit={handleSubmit}>
      <input
        type="text"
        name="author"
        value={form.author}
        onChange={handleChange}
        className="inputField"
        placeholder="Author"
      />
      <input
        type="text"
        name="title"
        value={form.title}
        onChange={handleChange}
        className="inputField"
        placeholder="Title"
      />
      <textarea
        name="content"
        value={form.content}
        onChange={handleChange}
        className="textAreaField"
        placeholder="Content"
      />
      <button type="submit" className="submitButton">Create Post</button>
    </form>
  );
}
