import Link from 'next/link';
function error() {
  return (
    <div>
      <h6>
        Error Pages <br />
        404
      </h6>
      <h5>
        <Link href='/'>
          <a>Go Back HOme page</a>
        </Link>
      </h5>
    </div>
  );
}

export default error;
