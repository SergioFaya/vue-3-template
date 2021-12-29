<template>
  <nav
    id="nav"
    class="navbar navbar-expand-lg navbar-dark bg-dark"
  >
    <div class="container-fluid">
      <a
        class="navbar-brand"
        href="#"
      >
        <img
          src="./assets/logo.png"
          alt=""
          width="30"
          height="30"
        >
      </a>

      <!-- Button when the nav is collapsed -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              class="nav-link active text-light "
              to="/"
            > Home </router-link>
          </li>
          <li class="nav-item text-light">
            <router-link
              class="nav-link active text-light"
              to="/about"
            > About </router-link>
          </li>
        </ul>

        <form class="d-flex">
          <input
            class="form-control me-2 input-lg"
            type="search"
            placeholder="Search"
            aria-label="Search"
          >
          <button
            class="btn btn-primary"
            type="submit"
          >Search</button>
        </form>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983 !important;
}
</style>
