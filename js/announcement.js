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

updateButton.addEventListener();
