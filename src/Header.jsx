import Logo from '/agriculture.png'

function Header() {

  return (
    <>
      <header class="text-blue-100 body-font bg-zinc-800">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src={Logo} class="w-10 h-10 text-white p-2 bg-green-100 rounded-full" alt="Logo" />
      <p class="ml-3 text-xl text-blue-100">Agro-Guru</p>
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-blue-100" href="#"
        onClick={(e) => {
          e.preventDefault();
          page=="blog";
        }}
        style={{ cursor: 'pointer' }}>Blogs</a>
      <a class="mr-5 hover:text-blue-100">Labs Near Me</a>
      <a class="mr-5 hover:text-blue-100">Marketplace</a>
      <a class="mr-5 hover:text-blue-100">Kisaan AI</a>
    </nav>
  </div>
</header>
    </>
  )
}

export default Header