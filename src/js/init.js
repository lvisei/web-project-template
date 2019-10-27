import parcelLogo from '../assets/images/parcel.png';

const initApp = () => {
    document.getElementById("app").innerHTML = `
			<h1>Hello Parcel!</h1>
				<div>
  				We use Parcel to bundle this sandbox, you can find more info about Parcel
  				<a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
				</div>
				<img src="${parcelLogo}" alt="parcelLogo" width="250" height="200">
		`;
}

export default initApp
