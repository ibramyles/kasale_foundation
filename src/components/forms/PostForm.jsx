/** @format */
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { createProduct } from '@/lib/action';
const PostForm = () => {
  return (
    <div>
      <form className='form-styles' action={createProduct}>
        <input type='text' placeholder='product name' name='title' />
        <input type='text' placeholder='Description' name='description' />
        <input type='text' placeholder='Price UGX' name='price' />
        <input type='text' placeholder='location' name='location' />
        <input type='file' accept='image/*' multiple className='my-2' />
        <button className='button-add-product flex items-center justify-center'>
          Sell Product
          <Plus className='inline-block font-bold ml-2 bg-brand-accent p-1 rounded-md' />
        </button>
      </form>
    </div>
  );
};

export default PostForm;
