import React from "react";
import { Container, ContainerDiv, ContainerProduct } from "./style";
import Gul from "../../assest/img/image 12.png";
import Gul1 from "../../assest/img/image 11.png";
import Gul2 from "../../assest/img/image2.png";
import On from "../../login/index";
import ShopCom from "../gulCard/index";

const Home = () => {
  return (
    <Container>
      <ContainerDiv>
        <div>
          <img src={Gul} alt="" />
          <img src={Gul1} alt="" />
          <img src={Gul} alt="" />
          <img src={Gul1} alt="" />
        </div>
        <div>
          <img src={Gul2} alt="" />
        </div>
        <div>
          <img
            height="25"
            src="https://img.icons8.com/ios/50/search--v1.png"
            alt=""
          />
        </div>
        <div>
          <h1>Barberton Daisy</h1>
          <div>
            <h5>$119.00</h5>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
              >
                <path
                  d="M10.1991 7.95006C10.0372 8.10694 9.9628 8.33381 9.99968 8.55631L10.5553 11.6313C10.6022 11.8919 10.4922 12.1557 10.2741 12.3063C10.0603 12.4626 9.77593 12.4813 9.5428 12.3563L6.77468 10.9126C6.67843 10.8613 6.57155 10.8338 6.46218 10.8307H6.2928C6.23405 10.8394 6.17655 10.8582 6.12405 10.8869L3.3553 12.3376C3.21843 12.4063 3.06343 12.4307 2.91155 12.4063C2.54155 12.3363 2.29468 11.9838 2.3553 11.6119L2.91155 8.53694C2.94843 8.31256 2.87405 8.08443 2.71218 7.92506L0.455303 5.73756C0.266553 5.55444 0.200928 5.27944 0.287178 5.03131C0.370928 4.78381 0.584678 4.60319 0.842803 4.56256L3.94905 4.11194C4.1853 4.08756 4.3928 3.94381 4.49905 3.73131L5.8678 0.925061C5.9003 0.862561 5.94218 0.805061 5.9928 0.756311L6.04905 0.712561C6.07843 0.680061 6.11218 0.653186 6.14968 0.631311L6.2178 0.606311L6.32405 0.562561H6.58718C6.82218 0.586936 7.02905 0.727561 7.13718 0.937561L8.52405 3.73131C8.62405 3.93569 8.81843 4.07756 9.0428 4.11194L12.1491 4.56256C12.4116 4.60006 12.6309 4.78131 12.7178 5.03131C12.7997 5.28194 12.7291 5.55694 12.5366 5.73756L10.1991 7.95006Z"
                  fill="#FFAC0C"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
              >
                <path
                  d="M10.1991 7.95006C10.0372 8.10694 9.9628 8.33381 9.99968 8.55631L10.5553 11.6313C10.6022 11.8919 10.4922 12.1557 10.2741 12.3063C10.0603 12.4626 9.77593 12.4813 9.5428 12.3563L6.77468 10.9126C6.67843 10.8613 6.57155 10.8338 6.46218 10.8307H6.2928C6.23405 10.8394 6.17655 10.8582 6.12405 10.8869L3.3553 12.3376C3.21843 12.4063 3.06343 12.4307 2.91155 12.4063C2.54155 12.3363 2.29468 11.9838 2.3553 11.6119L2.91155 8.53694C2.94843 8.31256 2.87405 8.08443 2.71218 7.92506L0.455303 5.73756C0.266553 5.55444 0.200928 5.27944 0.287178 5.03131C0.370928 4.78381 0.584678 4.60319 0.842803 4.56256L3.94905 4.11194C4.1853 4.08756 4.3928 3.94381 4.49905 3.73131L5.8678 0.925061C5.9003 0.862561 5.94218 0.805061 5.9928 0.756311L6.04905 0.712561C6.07843 0.680061 6.11218 0.653186 6.14968 0.631311L6.2178 0.606311L6.32405 0.562561H6.58718C6.82218 0.586936 7.02905 0.727561 7.13718 0.937561L8.52405 3.73131C8.62405 3.93569 8.81843 4.07756 9.0428 4.11194L12.1491 4.56256C12.4116 4.60006 12.6309 4.78131 12.7178 5.03131C12.7997 5.28194 12.7291 5.55694 12.5366 5.73756L10.1991 7.95006Z"
                  fill="#FFAC0C"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
              >
                <path
                  d="M10.1991 7.95006C10.0372 8.10694 9.9628 8.33381 9.99968 8.55631L10.5553 11.6313C10.6022 11.8919 10.4922 12.1557 10.2741 12.3063C10.0603 12.4626 9.77593 12.4813 9.5428 12.3563L6.77468 10.9126C6.67843 10.8613 6.57155 10.8338 6.46218 10.8307H6.2928C6.23405 10.8394 6.17655 10.8582 6.12405 10.8869L3.3553 12.3376C3.21843 12.4063 3.06343 12.4307 2.91155 12.4063C2.54155 12.3363 2.29468 11.9838 2.3553 11.6119L2.91155 8.53694C2.94843 8.31256 2.87405 8.08443 2.71218 7.92506L0.455303 5.73756C0.266553 5.55444 0.200928 5.27944 0.287178 5.03131C0.370928 4.78381 0.584678 4.60319 0.842803 4.56256L3.94905 4.11194C4.1853 4.08756 4.3928 3.94381 4.49905 3.73131L5.8678 0.925061C5.9003 0.862561 5.94218 0.805061 5.9928 0.756311L6.04905 0.712561C6.07843 0.680061 6.11218 0.653186 6.14968 0.631311L6.2178 0.606311L6.32405 0.562561H6.58718C6.82218 0.586936 7.02905 0.727561 7.13718 0.937561L8.52405 3.73131C8.62405 3.93569 8.81843 4.07756 9.0428 4.11194L12.1491 4.56256C12.4116 4.60006 12.6309 4.78131 12.7178 5.03131C12.7997 5.28194 12.7291 5.55694 12.5366 5.73756L10.1991 7.95006Z"
                  fill="#FFAC0C"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
              >
                <path
                  d="M10.1991 7.95006C10.0372 8.10694 9.9628 8.33381 9.99968 8.55631L10.5553 11.6313C10.6022 11.8919 10.4922 12.1557 10.2741 12.3063C10.0603 12.4626 9.77593 12.4813 9.5428 12.3563L6.77468 10.9126C6.67843 10.8613 6.57155 10.8338 6.46218 10.8307H6.2928C6.23405 10.8394 6.17655 10.8582 6.12405 10.8869L3.3553 12.3376C3.21843 12.4063 3.06343 12.4307 2.91155 12.4063C2.54155 12.3363 2.29468 11.9838 2.3553 11.6119L2.91155 8.53694C2.94843 8.31256 2.87405 8.08443 2.71218 7.92506L0.455303 5.73756C0.266553 5.55444 0.200928 5.27944 0.287178 5.03131C0.370928 4.78381 0.584678 4.60319 0.842803 4.56256L3.94905 4.11194C4.1853 4.08756 4.3928 3.94381 4.49905 3.73131L5.8678 0.925061C5.9003 0.862561 5.94218 0.805061 5.9928 0.756311L6.04905 0.712561C6.07843 0.680061 6.11218 0.653186 6.14968 0.631311L6.2178 0.606311L6.32405 0.562561H6.58718C6.82218 0.586936 7.02905 0.727561 7.13718 0.937561L8.52405 3.73131C8.62405 3.93569 8.81843 4.07756 9.0428 4.11194L12.1491 4.56256C12.4116 4.60006 12.6309 4.78131 12.7178 5.03131C12.7997 5.28194 12.7291 5.55694 12.5366 5.73756L10.1991 7.95006Z"
                  fill="#FFAC0C"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
              >
                <path
                  d="M10.1991 7.95006C10.0372 8.10694 9.9628 8.33381 9.99968 8.55631L10.5553 11.6313C10.6022 11.8919 10.4922 12.1557 10.2741 12.3063C10.0603 12.4626 9.77593 12.4813 9.5428 12.3563L6.77468 10.9126C6.67843 10.8613 6.57155 10.8338 6.46218 10.8307H6.2928C6.23405 10.8394 6.17655 10.8582 6.12405 10.8869L3.3553 12.3376C3.21843 12.4063 3.06343 12.4307 2.91155 12.4063C2.54155 12.3363 2.29468 11.9838 2.3553 11.6119L2.91155 8.53694C2.94843 8.31256 2.87405 8.08443 2.71218 7.92506L0.455303 5.73756C0.266553 5.55444 0.200928 5.27944 0.287178 5.03131C0.370928 4.78381 0.584678 4.60319 0.842803 4.56256L3.94905 4.11194C4.1853 4.08756 4.3928 3.94381 4.49905 3.73131L5.8678 0.925061C5.9003 0.862561 5.94218 0.805061 5.9928 0.756311L6.04905 0.712561C6.07843 0.680061 6.11218 0.653186 6.14968 0.631311L6.2178 0.606311L6.32405 0.562561H6.58718C6.82218 0.586936 7.02905 0.727561 7.13718 0.937561L8.52405 3.73131C8.62405 3.93569 8.81843 4.07756 9.0428 4.11194L12.1491 4.56256C12.4116 4.60006 12.6309 4.78131 12.7178 5.03131C12.7997 5.28194 12.7291 5.55694 12.5366 5.73756L10.1991 7.95006Z"
                  fill="#C4C4C4"
                />
              </svg>
              <h6>19 Customer Review</h6>
            </p>
          </div>
          <h2>Short Description:</h2>
          <p>
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off <br />
            the ground. The ceramic cylinder planters come with a wooden stand
            to help elevate <br />
            your plants off the ground.{" "}
          </p>
          <h1>Size:</h1>
          <main>
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
          </main>
          <footer>
            <On/>
            <div>
              <button className="btn1">Buy NOW</button>
              <button className="btn2">Add to cart</button>
              <button className="btn3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10 18.8873C9.71527 18.8873 9.44077 18.7842 9.22684 18.5968C8.41888 17.8903 7.63992 17.2264 6.95267 16.6408L6.94916 16.6377C4.93423 14.9207 3.19427 13.4378 1.98364 11.9771C0.630341 10.3441 0 8.79578 0 7.10434C0 5.46097 0.563507 3.94485 1.58661 2.83508C2.62192 1.71219 4.04251 1.09375 5.58716 1.09375C6.74164 1.09375 7.79892 1.45874 8.72955 2.1785C9.19922 2.54181 9.62494 2.98645 10 3.5051C10.3752 2.98645 10.8008 2.54181 11.2706 2.1785C12.2012 1.45874 13.2585 1.09375 14.413 1.09375C15.9575 1.09375 17.3782 1.71219 18.4135 2.83508C19.4366 3.94485 20 5.46097 20 7.10434C20 8.79578 19.3698 10.3441 18.0165 11.9769C16.8059 13.4378 15.0661 14.9205 13.0515 16.6374C12.363 17.224 11.5828 17.8889 10.773 18.5971C10.5592 18.7842 10.2846 18.8873 10 18.8873ZM5.58716 2.26532C4.37363 2.26532 3.25882 2.74963 2.44781 3.62915C1.62476 4.52194 1.17142 5.75607 1.17142 7.10434C1.17142 8.52692 1.70013 9.79919 2.88559 11.2296C4.03137 12.6122 5.73563 14.0645 7.70889 15.7462L7.71255 15.7492C8.4024 16.3371 9.18442 17.0036 9.99832 17.7153C10.8171 17.0023 11.6003 16.3347 12.2916 15.7458C14.2647 14.0642 15.9688 12.6122 17.1146 11.2296C18.2999 9.79919 18.8286 8.52692 18.8286 7.10434C18.8286 5.75607 18.3752 4.52194 17.5522 3.62915C16.7413 2.74963 15.6264 2.26532 14.413 2.26532C13.524 2.26532 12.7078 2.54791 11.9872 3.10516C11.3449 3.60199 10.8975 4.23004 10.6352 4.66949C10.5003 4.89548 10.2629 5.03036 10 5.03036C9.73709 5.03036 9.49966 4.89548 9.36478 4.66949C9.10263 4.23004 8.65524 3.60199 8.01285 3.10516C7.29218 2.54791 6.47598 2.26532 5.58716 2.26532Z"
                    fill="#46A358"
                  />
                </svg>
              </button>
            </div>
          </footer>
          <div>
            <p>
              SKU: 1995751877966 <br />
              Categories: Potter Plants <br />
              Tags: Home, Garden, Plants
            </p>
          </div>
          <div>
            <h1>
              Share this products:
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="15"
                viewBox="0 0 8 15"
                fill="none"
              >
                <path
                  d="M1.875 5H0V7.5H1.875V15H5V7.5H7.25L7.5 5H5V3.9375C5 3.375 5.125 3.125 5.6875 3.125H7.5V0H5.125C2.875 0 1.875 1 1.875 2.875V5Z"
                  fill="#3D3D3D"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="13"
                viewBox="0 0 15 13"
                fill="none"
              >
                <path
                  d="M4.71737 12.1908C10.378 12.1908 13.4736 7.50111 13.4736 3.4346C13.4736 3.30135 13.4709 3.1688 13.4647 3.03675C14.0656 2.60239 14.588 2.06021 15 1.44331C14.4486 1.6883 13.8552 1.85327 13.2327 1.92765C13.868 1.54669 14.356 0.94378 14.5861 0.225197C13.9914 0.577835 13.3329 0.834082 12.632 0.972271C12.0702 0.374134 11.2704 0 10.3855 0C8.68578 0 7.30747 1.37831 7.30747 3.07718C7.30747 3.31876 7.3346 3.55351 7.38715 3.77887C4.82962 3.65041 2.56162 2.42565 1.04392 0.563675C0.779318 1.01833 0.626969 1.54686 0.626969 2.11037C0.626969 3.17801 1.17034 4.12059 1.99658 4.67216C1.49176 4.65663 1.01748 4.51776 0.602743 4.2871C0.602061 4.2999 0.602061 4.31286 0.602061 4.32634C0.602061 5.81691 1.66305 7.06129 3.07104 7.3433C2.81257 7.41376 2.54063 7.45163 2.25982 7.45163C2.06158 7.45163 1.86879 7.43184 1.6813 7.39619C2.07301 8.61873 3.20923 9.5086 4.55632 9.53368C3.50284 10.3592 2.17588 10.8511 0.734108 10.8511C0.48588 10.8511 0.240893 10.8369 0 10.8084C1.36193 11.6812 2.97908 12.1908 4.71737 12.1908Z"
                  fill="#3D3D3D"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
              >
                <path
                  d="M3.125 1.5625C3.125 2.4375 2.4375 3.125 1.5625 3.125C0.6875 3.125 0 2.4375 0 1.5625C0 0.6875 0.6875 0 1.5625 0C2.4375 0 3.125 0.6875 3.125 1.5625ZM3.125 4.375H0V14.375H3.125V4.375ZM8.125 4.375H5V14.375H8.125V9.125C8.125 6.1875 11.875 5.9375 11.875 9.125V14.375H15V8.0625C15 3.125 9.4375 3.3125 8.125 5.75V4.375Z"
                  fill="#3D3D3D"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9 4.09091C7.30168 4.09091 4.98846 4.2365 3.51951 4.34356C3.03167 4.37911 2.65385 4.76529 2.65385 5.23696V5.76996L8.53304 8.85802C8.82344 9.01056 9.17656 9.01056 9.46697 8.85802L15.3462 5.76996V5.23696C15.3462 4.76529 14.9683 4.37911 14.4805 4.34356C13.0115 4.2365 10.6983 4.09091 9 4.09091ZM15.3462 7.01792L10.0273 9.81165C9.38843 10.1472 8.61157 10.1472 7.97268 9.81165L2.65385 7.01792V12.763C2.65385 13.2347 3.03167 13.6209 3.51951 13.6564C4.98846 13.7635 7.30168 13.9091 9 13.9091C10.6983 13.9091 13.0115 13.7635 14.4805 13.6564C14.9683 13.6209 15.3462 13.2347 15.3462 12.763V7.01792ZM3.43083 3.25588C4.90066 3.14876 7.25301 3 9 3C10.747 3 13.0993 3.14876 14.5692 3.25588C15.6676 3.33593 16.5 4.20441 16.5 5.23696V12.763C16.5 13.7956 15.6676 14.6641 14.5692 14.7441C13.0993 14.8512 10.747 15 9 15C7.25301 15 4.90066 14.8512 3.43083 14.7441C2.33237 14.6641 1.5 13.7956 1.5 12.763V5.23696C1.5 4.20441 2.33237 3.33593 3.43083 3.25588Z"
                  fill="#3D3D3D"
                />
              </svg>
            </h1>
          </div>
        </div>
        <div></div>
      </ContainerDiv>
      <ContainerProduct>
        <div className="Product">
          <h1>
            Product Description <b>Reviews (19)</b>
          </h1>
          <p>
            The ceramic cylinder planters come with a wooden stand to help
            elevate your <br />
            plants off the ground. The ceramic cylinder planters come with a
            wooden stand to help elevate your plants off the ground. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec
            est tristique auctor. Donec non est at libero vulputate rutrum.
            Morbi ornare lectus <br />
            quis justo gravida semper. Nulla tellus mi, vulputate adipiscing
            cursus eu, suscipit id
            <br />
            Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat
            sem, quis fermentum turpis eros eget velit. Donec ac tempus ante.
            Fusce ultricies massa massa. Fusce aliquam, <br />
            purus eget sagittis vulputate, sapien libero hendrerit est, sed
            commodo augue nisi non neque. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed tempor, lorem et placerat <br />
            vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.
            Cras neque metus, consequat et blandit et, luctus a nunc. Etiam
            gravida vehicula tellus, in imperdiet ligula euismod <br />
            eget. The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground.
            <div className="level">
              <h1>Living Room:</h1>
              <p>
                The ceramic cylinder planters come with a wooden stand to help
                elevate your plants off the ground. The ceramic cylinder
                planters come with a wooden stand to help elevate your <br />
                plants off the ground. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
              <h1>Dining Room:</h1>
              <p>
                The benefits of houseplants are endless. In addition to cleaning
                the air of harmful toxins, they can help to improve your mood,
                reduce stress and provide you with better sleep. Fill every{" "}
                <br />
                room of your home with houseplants and their restorative
                qualities will improve your life.
              </p>
              <h1>Office:</h1>
              <p>
                The ceramic cylinder planters come with a wooden stand to help
                elevate your plants off the ground. The ceramic cylinder
                planters come with a wooden stand to help elevate your <br />
                plants off the ground. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
            </div>
          </p>
          <div className="Card">
            <h1>Releted Products</h1>
            <ShopCom/>
          </div>
        </div>
      </ContainerProduct>
    </Container>
  );
};

export default Home;
