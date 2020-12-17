<template>
  <div>
<!--  <div class="p-0 m-0 container-fluid w-100">
    <img class="img-fluid w-100" src="~/assets/header.jpg" />
    <div class="bottom-right">Vinnie's Handyman Services</div>
  </div>
  -->
  <nav class="navbar navbar-expand-lg">
    <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
        <li class="nav-item">
            <NuxtLink class="nav-link" to="/">Home</NuxtLink>
        </li>
        <li class="nav-item">
            <NuxtLink class="nav-link" to="/gallery">Gallery</NuxtLink>
        </li>
        <li class="nav-item">
            <NuxtLink class="nav-link" to="/contact">Contact</NuxtLink>
        </li>
        </ul>
    <span class="navbar-text">
     Vinnie's Handyman Services 
    </span>
  </div>
  </nav>

  <div>
    <Nuxt />
  </div>
  </div>
</template>

<style>
.navbar {
    background-color: white !important;
    border-bottom: .5em solid black;
    padding-bottom: 0px !important;
}
.navbar a {
    color: black;
}
.navbar li {
}
.navbar-nav {
    height: 100%;
}
.active {
    color: white !important;
    background-color: black;
}
.container-fluid {
  position: relative;
  text-align: center;
  color: white;
}
.bottom-right {
  position: absolute;
  bottom: 8px;
  right: 16px;
}
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body {
    background-color: whitesmoke;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.navbar-text{
    font-weight: bold;
    font-style: italic;
}
</style>
