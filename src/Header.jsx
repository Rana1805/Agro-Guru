import Logo from '/agriculture.png'

function Header() {

  return (
    <>
      <header class="text-blue-100 body-font bg-zinc-800">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src={Logo} class="w-10 h-10 text-white p-2 bg-green-100 rounded-full" alt="Logo" />
      <a class="ml-3 text-xl text-blue-100" href="index.html">Agro-Guru</a>
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-blue-100" href="blog.html" style={{ cursor: 'pointer' }}>Blogs</a>
      <a class="mr-5 hover:text-blue-100" href="labs.html" style={{ cursor: 'pointer' }}>Labs Near Me</a>
      <a class="mr-5 hover:text-blue-100" href="marketplace.html" style={{ cursor: 'pointer' }}>Marketplace</a>
      <a class="mr-5 hover:text-blue-100" href="ai.html" style={{ cursor: 'pointer' }}>Kisaan AI</a>
    </nav>
    <button class="inline-flex items-center bg-lime-200 border-0 py-1 px-3 focus:outline-none hover:bg-lime-400 rounded text-gray-800 text-base mt-4 md:mt-0">Login
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
    </>
  )
}

export default Header