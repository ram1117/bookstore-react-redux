import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categorySlice';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.category.status);
  return (
    <>
      <button type="button" onClick={() => { dispatch(checkStatus()); }} className="check-status">Check Status</button>
      <h1>{status}</h1>
    </>

  );
};

export default Categories;
