function Header() {
  return (
    <header className='p-6 flex justify-center sm:justify-between items-center'>
      <h1 className='text-2xl font-bold text-purple-400 max-sm:hidden'>Sojo Dev</h1>
      <nav>
        <ul className='flex space-x-4'>
          <li>
            <a href='#about' className='hover:text-green-400 transition-colors'>
              About
            </a>
          </li>
          <li>
            <a
              href='#projects'
              className='hover:text-green-400 transition-colors'
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href='#technologies'
              className='hover:text-green-400 transition-colors'
            >
              Technologies
            </a>
          </li>
          <li>
            <a
              href='#contact'
              className='hover:text-green-400 transition-colors'
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
