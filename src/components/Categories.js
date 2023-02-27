import { useSelector } from 'react-redux';

const Categories = () => {
  const status = useSelector((state) => state.category.status);
  return (
    <>
      <h1>{status}</h1>
      <button type="button" className="check-status">Check Status</button>
    </>

  );
};

export default Categories;
