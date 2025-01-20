/** @format */

const Popup = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50'>
      <div className='bg-white w-11/12 max-w-md rounded-lg shadow-lg p-4 lg:p-8'>
        <h2 className='text-2xl font-bold text-gray-800 mb-4 text-center'>
          KASALE
        </h2>
        <ul className='text-lg text-gray-600 space-y-2 text-base'>
          <li>
            <span className='font-semibold text-brand-accent'>K - Kindle:</span>{' '}
            The warmth in others
          </li>
          <li>
            <span className='font-semibold text-brand-accent'>A - Able:</span>{' '}
            For you surely are
          </li>
          <li>
            <span className='font-semibold text-brand-accent'>
              S - Sensible:
            </span>{' '}
            The practical side
          </li>
          <li>
            <span className='font-semibold text-brand-accent'>A - Accord:</span>{' '}
            The harmony you spread
          </li>
          <li>
            <span className='font-semibold text-brand-accent'>L - Luxury:</span>{' '}
            Of your smile
          </li>
          <li>
            <span className='font-semibold text-brand-accent'>E - Extra:</span>{' '}
            Those little things you do
          </li>
        </ul>
        <button
          className='mt-6 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 w-full'
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
