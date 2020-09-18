// // import { bloghost } from "./url.js";

// // const bloghost = require("./url.js");
// // const bloghost = "https://young-inlet-33241.herokuapp.com/";

// const Blog = async () => {
//   try {
//     // const url = `${bloghost}/announcements/`;
//     const url = `https://young-inlet-33241.herokuapp.com/announcements/`;
//     const ftch = await fetch(url);
//     const data = await ftch.json();
//     const result = data;
//     // console.log(result[0]);

//     // <div class="update">
//     //       <time datetime="2020-08-23">23/08/2020</time>
//     //       <h2>This is an Example</h2>
//     //       <p>
//     //         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
//     //         alias, sequi quasi commodi architecto ipsum earum quibusdam nihil
//     //         enim aliquid!
//     //       </p>
//     //       <div></div>
//     //     </div>

//     for (let i in result) {
//       const container = document.querySelector("#update-cont");

//       const dv = document.createElement("div");
//       dv.classList = "update";

//       const id = result[i]._id;
//       // console.log(id);

//       link = `https://young-inlet-33241.herokuapp.com/announcements?id=${id}`;
//       console.log(link);

//       //   const img = document.createElement("img");
//       //   img.classList = "blog__img";
//       //   img.src = `${result[i].thumbnailimg.url}`;

//       const heading = document.createElement("h2");
//       //   heading.classList = "blog__heading";
//       heading.textContent = `${result[i].Title}`;

//       let thumbimage = null;

//       if (result[i].hasOwnProperty("cover")) {
//         // console.log(result[i]);
//         thumbimage = document.createElement("div");
//         thumbimage.style.backgroundImage = `url(${result[i].cover.formats.large.url})`;
//       }

//       //   console.log(result[1].cover.formats.large.url);

//       const desc = document.createElement("p");
//       // desc.classList = " description";
//       desc.textContent = `${result[i].content}`;

//       //   const date = document.createElement("p");
//       //   date.classList = "date";
//       //   date.textContent = `${result[i].date}`;

//       const hrf = document.createElement("a");
//       //   hrf.classList = "below";
//       hrf.href = link;
//       hrf.textContent = "Read More";

//       //   const readmore = document.createElement("div");
//       //   readmore.classList = "readmore";
//       //   readmore.textContent = `${result[i].content}`;

//       //   const hr = document.createElement("hr");

//       //   dv.appendChild(img);
//       dv.appendChild(heading);
//       dv.appendChild(desc);
//       dv.appendChild(hrf);
//       if (thumbimage !== null) {
//         dv.appendChild(thumbimage);
//       }
//       //   dv.appendChild(date);
//       //   dv.appendChild(readmore);
//       //   dv.appendChild(hr);

//       container.appendChild(dv);
//     }
//   } catch (error) {
//     console.log("failed", error);
//   }
// };

// Blog();

const updateButton = document.querySelector("#update-button");
const eventButton = document.querySelector("#event-button");
const circularButton = document.querySelector("#circular-button");

updateButton.addEventListener("click", updateButtonHandler);
eventButton.addEventListener("click", eventButtonHandler);
circularButton.addEventListener("click", circularButtonHandler);

let bloghost = "https://young-inlet-33241.herokuapp.com/updates";

const Blog = async (inputLink) => {
	try {
		// const url = `${bloghost}/announcements/`;
		// const url = `https://young-inlet-33241.herokuapp.com/announcements/`;
		const url = inputLink;
		const ftch = await fetch(url);
		const data = await ftch.json();
		const result = data;
		// console.log(result[0]);

		const container = document.querySelector("#update-cont");
		container.innerHTML = "";
		// <div class="update">
		//       <time datetime="2020-08-23">23/08/2020</time>
		//       <h2>This is an Example</h2>
		//       <p>
		//         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
		//         alias, sequi quasi commodi architecto ipsum earum quibusdam nihil
		//         enim aliquid!
		//       </p>
		//       <div></div>
		//     </div>

		for (let i in result) {
			const dv = document.createElement("div");
			dv.classList = "update";
			// console.log(result);

			const id = result[i]._id;
			// console.log(id);

			//   const img = document.createElement("img");
			//   img.classList = "blog__img";
			//   img.src = `${result[i].thumbnailimg.url}`;

			const heading = document.createElement("h2");
			//   heading.classList = "blog__heading";
			heading.textContent = `${result[i].title}`;

			let thumbimage = null;

			if (result[i].hasOwnProperty("cover")) {
				// console.log(result[i].cover[0].url);
				// console.log(result[i].cover.length);
				if (result[i].cover.length > 0) {
					// console.log(result[i].cover[0].url);
					thumbimage = document.createElement("div");
					thumbimage.style.backgroundImage = `url(${result[i].cover[0].url})`;
				}
				// thumbimage = document.createElement("div");
				// thumbimage.style.backgroundImage = `url(${result[i].cover[0].formats.large.url})`;
				// console.log(result[i]);
			}

			//   console.log(result[1].cover.formats.large.url);

			const desc = document.createElement("p");
			// desc.classList = " description";

			// desc.textContent = `${result[i].desc}`;
			if (result[i].hasOwnProperty("desc")) {
				desc.textContent = `${result[i].desc}`;
			} else {
				desc.textContent = `${result[i].content}`;
			}
			//   const date = document.createElement("p");
			//   date.classList = "date";
			//   date.textContent = `${result[i].date}`;

			// console.log(result[i].createdAt.substring(0, 10));
			const date = document.createElement("time");
			dateString = result[i].createdAt.substring(0, 10);
			date.dateTime = dateString;
			date.innerText = dateString;

			// link = `https://young-inlet-33241.herokuapp.com/announcements?id=${id}`;
			// console.log(link);
			let link = inputLink.substring(39);
			// console.log(link);

			const hrf = document.createElement("a");
			//   hrf.classList = "below";
			hrf.href = link;
			hrf.textContent = "Read More";

			//   const readmore = document.createElement("div");
			//   readmore.classList = "readmore";
			//   readmore.textContent = `${result[i].content}`;

			//   const hr = document.createElement("hr");

			//   dv.appendChild(img);
			dv.appendChild(date);
			dv.appendChild(heading);
			dv.appendChild(desc);
			dv.appendChild(hrf);
			if (thumbimage !== null) {
				dv.appendChild(thumbimage);
			}

			//   dv.appendChild(readmore);
			//   dv.appendChild(hr);

			container.appendChild(dv);
		}
	} catch (error) {
		console.log("failed", error);
	}
};

function updateButtonHandler() {
	if (eventButton.classList.contains("active-category")) {
		eventButton.classList.remove("active-category");
	}
	if (circularButton.classList.contains("active-category")) {
		circularButton.classList.remove("active-category");
	}
	updateButton.classList.add("active-category");
	// bloghost = "https://young-inlet-33241.herokuapp.com/updates";

	// Blog("https://young-inlet-33241.herokuapp.com/announcements");
	Blog("https://young-inlet-33241.herokuapp.com/updates");
	// console.log("You pushed update button");
}

function eventButtonHandler() {
	if (updateButton.classList.contains("active-category")) {
		updateButton.classList.remove("active-category");
	}
	if (circularButton.classList.contains("active-category")) {
		circularButton.classList.remove("active-category");
	}
	eventButton.classList.add("active-category");
	// bloghost = "https://young-inlet-33241.herokuapp.com/events";

	Blog("https://young-inlet-33241.herokuapp.com/events");
	// console.log("You pushed event button");
}

function circularButtonHandler() {
	if (updateButton.classList.contains("active-category")) {
		updateButton.classList.remove("active-category");
	}
	if (eventButton.classList.contains("active-category")) {
		eventButton.classList.remove("active-category");
	}
	circularButton.classList.add("active-category");
	// bloghost = "https://young-inlet-33241.herokuapp.com/circulars";

	Blog("https://young-inlet-33241.herokuapp.com/circulars");
	// console.log("You pushed circular button");
}

window.onload = (e) => {
	updateButtonHandler();
};
