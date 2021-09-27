import React from "react";

export function LogoMobile({ width, withText = true, onClick }) {
  return (
    <svg
      width={width}
      viewBox="0 0 77 22"
      fill="none"
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      className="union-logo-mobile"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 4C20.6569 4 22 5.34315 22 7L22 13.8385C22 14.3657 22 14.8205 21.9694 15.195C21.9371 15.5904 21.8658 15.9836 21.673 16.362C21.3854 16.9265 20.9265 17.3854 20.362 17.673C19.9836 17.8658 19.5904 17.9371 19.195 17.9694C18.8205 18 18.3657 18 17.8385 18H14.2C13.6234 18 13.2512 18.0008 12.9678 18.0239C12.6962 18.0461 12.5955 18.0838 12.546 18.109C12.3578 18.2049 12.2049 18.3578 12.109 18.546C12.0838 18.5955 12.0461 18.6962 12.0239 18.9678C12.0036 19.217 12.0005 19.5349 12.0001 20H15C15.5523 20 16 19.5523 16 19V18.5H18V19C18 20.6569 16.6569 22 15 22H8.16146C7.63439 22 7.1795 22 6.80497 21.9694C6.40963 21.9371 6.01641 21.8658 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4.13419 19.9836 4.06287 19.5904 4.03057 19.195C3.99997 18.8205 3.99998 18.3657 4 17.8385L4 14.2C4 13.6234 3.99922 13.2512 3.97607 12.9678C3.95388 12.6962 3.9162 12.5955 3.89101 12.546C3.79513 12.3578 3.64215 12.2049 3.45399 12.109C3.40455 12.0838 3.30383 12.0461 3.03216 12.0239C2.78302 12.0036 2.4651 12.0005 2 12.0001V15C2 15.5523 2.44772 16 3 16H3.5V18H3C1.34315 18 6.93104e-07 16.6569 6.93104e-07 15V8.16146C-1.47886e-05 7.63436 -2.81446e-05 7.17952 0.0305735 6.80497C0.0628745 6.40963 0.13419 6.01641 0.326985 5.63803C0.614605 5.07354 1.07355 4.6146 1.63803 4.32698C2.01641 4.13419 2.40963 4.06287 2.80498 4.03057C3.17954 3.99997 3.6343 3.99998 4.16144 4L7.8 4C8.37656 4 8.74883 3.99922 9.03217 3.97607C9.30383 3.95388 9.40455 3.9162 9.454 3.89101C9.64216 3.79513 9.79514 3.64215 9.89101 3.45399C9.9162 3.40455 9.95388 3.30383 9.97608 3.03216C9.99643 2.78302 9.99949 2.4651 9.99993 2H7C6.44772 2 6 2.44772 6 3V3.5H4V3C4 1.34315 5.34315 7.65964e-07 7 7.65964e-07H13.8385C14.3657 -1.57916e-05 14.8205 -2.97688e-05 15.195 0.0305725C15.5904 0.0628735 15.9836 0.13419 16.362 0.326984C16.9265 0.614604 17.3854 1.07355 17.673 1.63803C17.8658 2.01641 17.9371 2.40963 17.9694 2.80498C18 3.17953 18 3.63427 18 4.16139L18 7.8C18 8.37656 18.0008 8.74883 18.0239 9.03217C18.0461 9.30383 18.0838 9.40455 18.109 9.45399C18.2049 9.64216 18.3578 9.79514 18.546 9.89101C18.5955 9.9162 18.6962 9.95388 18.9678 9.97608C19.217 9.99643 19.5349 9.99949 20 9.99993V7C20 6.44772 19.5523 6 19 6H18.5V4H19ZM5.23607 11C5.40762 10.8082 5.5548 10.594 5.67302 10.362C5.86582 9.98359 5.93713 9.59037 5.96943 9.19503C6.00004 8.82046 6.00002 8.36569 6.00001 7.83854L5.99963 6.5H4L4 7.8C4 8.37655 3.99923 8.74883 3.97608 9.03216C3.95388 9.30383 3.9162 9.40455 3.89101 9.45399C3.79514 9.64215 3.64216 9.79513 3.45399 9.89101C3.40455 9.9162 3.30383 9.95388 3.03217 9.97607C2.78302 9.99643 2.46511 9.99949 2 9.99993V8.2C2 7.62345 2.00078 7.25117 2.02393 6.96784C2.04613 6.69617 2.0838 6.59545 2.109 6.54601C2.20487 6.35785 2.35785 6.20487 2.54601 6.10899C2.59546 6.0838 2.69618 6.04612 2.96784 6.02393C3.25118 6.00078 3.62345 6 4.2 6L7.83855 6C8.3657 6.00002 8.82046 6.00003 9.19503 5.96943C9.59038 5.93713 9.9836 5.86581 10.362 5.67302C10.594 5.55479 10.8082 5.40762 11 5.23607C11.1918 5.40762 11.406 5.5548 11.638 5.67302C12.0164 5.86582 12.4096 5.93713 12.805 5.96943C13.1795 6.00004 13.6343 6.00002 14.1615 6L15.5 5.99962V4L14.2 4C13.6234 4 13.2512 3.99923 12.9678 3.97608C12.6962 3.95388 12.5955 3.9162 12.546 3.89101C12.3579 3.79514 12.2049 3.64216 12.109 3.45399C12.0838 3.40455 12.0461 3.30383 12.0239 3.03217C12.0036 2.78302 12.0005 2.46511 12.0001 2H13.8C14.3766 2 14.7488 2.00078 15.0322 2.02393C15.3038 2.04613 15.4045 2.0838 15.454 2.109C15.6422 2.20487 15.7951 2.35785 15.891 2.54601C15.9162 2.59546 15.9539 2.69618 15.9761 2.96784C15.9992 3.25118 16 3.62345 16 4.2V7.83855C16 8.3657 16 8.82046 16.0306 9.19503C16.0629 9.59038 16.1342 9.9836 16.327 10.362C16.4452 10.594 16.5924 10.8082 16.7639 11C16.5924 11.1918 16.4452 11.406 16.327 11.638C16.1342 12.0164 16.0629 12.4096 16.0306 12.805C16 13.1795 16 13.6343 16 14.1614L16.0004 15.5L18 15.5L18 14.2C18 13.6234 18.0008 13.2512 18.0239 12.9678C18.0461 12.6962 18.0838 12.5955 18.109 12.546C18.2049 12.3579 18.3578 12.2049 18.546 12.109C18.5955 12.0838 18.6962 12.0461 18.9678 12.0239C19.217 12.0036 19.5349 12.0005 20 12.0001V13.8C20 14.3766 19.9992 14.7488 19.9761 15.0322C19.9539 15.3038 19.9162 15.4045 19.891 15.454C19.7951 15.6422 19.6422 15.7951 19.454 15.891C19.4045 15.9162 19.3038 15.9539 19.0322 15.9761C18.7488 15.9992 18.3766 16 17.8 16H14.1615C13.6343 16 13.1795 16 12.805 16.0306C12.4096 16.0629 12.0164 16.1342 11.638 16.327C11.406 16.4452 11.1918 16.5924 11 16.7639C10.8082 16.5924 10.594 16.4452 10.362 16.327C9.98359 16.1342 9.59037 16.0629 9.19503 16.0306C8.82046 16 8.36569 16 7.83854 16L6.5 16.0004V18L7.8 18C8.37655 18 8.74883 18.0008 9.03216 18.0239C9.30383 18.0461 9.40455 18.0838 9.45399 18.109C9.64215 18.2049 9.79513 18.3578 9.89101 18.546C9.9162 18.5954 9.95388 18.6962 9.97607 18.9678C9.99643 19.217 9.99949 19.5349 9.99993 20H8.2C7.62345 20 7.25117 19.9992 6.96784 19.9761C6.69617 19.9539 6.59545 19.9162 6.54601 19.891C6.35785 19.7951 6.20487 19.6421 6.10899 19.454C6.0838 19.4045 6.04612 19.3038 6.02393 19.0322C6.00078 18.7488 6 18.3766 6 17.8L6 14.1615C6.00002 13.6343 6.00003 13.1795 5.96943 12.805C5.93713 12.4096 5.86581 12.0164 5.67302 11.638C5.55479 11.406 5.40762 11.1918 5.23607 11Z"
        fill="#44403C"
      />
      {withText && (
        <>
          <path
            d="M37.287 4.30202C37.0109 4.30202 36.787 4.52588 36.787 4.80202V12.6221C36.787 14.7265 35.2892 15.6618 33.7515 15.6618C32.074 15.6618 30.716 14.746 30.716 12.6221V4.80202C30.716 4.52588 30.4921 4.30202 30.216 4.30202H28.5C28.2239 4.30202 28 4.52588 28 4.80202V12.4662C28 15.8566 30.1368 18 33.7515 18C37.2663 18 39.503 15.8566 39.503 12.4662V4.80202C39.503 4.52588 39.2792 4.30202 39.003 4.30202H37.287Z"
            fill="#44403C"
          />
          <path
            d="M47.3609 7.40014C45.5237 7.40014 44.3254 8.84203 43.8461 9.87474C43.7663 10.0306 43.7063 10.1475 43.5466 10.1086C43.287 10.0501 43.4068 9.77731 43.4867 9.60195C43.6864 9.19276 43.8062 8.82255 43.8062 8.19903V8.05602C43.8062 7.77988 43.5823 7.55602 43.3062 7.55602H41.75C41.4738 7.55602 41.25 7.77988 41.25 8.05602V17.3441C41.25 17.6203 41.4738 17.8441 41.75 17.8441H43.3062C43.5823 17.8441 43.8062 17.6203 43.8062 17.3441V13.6548C43.8062 11.2777 45.1642 9.6604 46.642 9.6604C47.98 9.6604 48.5991 10.3034 48.5991 12.6221V17.3441C48.5991 17.6203 48.823 17.8441 49.0991 17.8441H50.6553C50.9315 17.8441 51.1553 17.6203 51.1553 17.3441V11.7648C51.1553 8.84203 49.6376 7.40014 47.3609 7.40014Z"
            fill="#44403C"
          />
          <path
            d="M52.4132 5.24704C52.4132 5.93577 52.9715 6.49409 53.6602 6.49409H53.7224C54.4111 6.49409 54.9694 5.93577 54.9694 5.24704C54.9694 4.55832 54.4111 4 53.7224 4H53.6602C52.9715 4 52.4132 4.55832 52.4132 5.24704ZM52.4132 17.3441C52.4132 17.6203 52.637 17.8441 52.9132 17.8441H54.4694C54.7455 17.8441 54.9694 17.6203 54.9694 17.3441V8.05602C54.9694 7.77988 54.7455 7.55602 54.4694 7.55602H52.9132C52.637 7.55602 52.4132 7.77988 52.4132 8.05602V17.3441Z"
            fill="#44403C"
          />
          <path
            d="M61.0326 7.40014C57.7375 7.40014 55.7604 9.77731 55.7604 12.7001C55.7604 15.6228 57.7375 18 61.0326 18C64.3278 18 66.3049 15.6228 66.3049 12.7001C66.3049 9.77731 64.3278 7.40014 61.0326 7.40014ZM61.0326 15.7397C59.2952 15.7397 58.3166 14.3758 58.3166 12.7001C58.3166 11.0244 59.2952 9.6604 61.0326 9.6604C62.7701 9.6604 63.7486 11.0244 63.7486 12.7001C63.7486 14.3758 62.7701 15.7397 61.0326 15.7397Z"
            fill="#44403C"
          />
          <path
            d="M73.2056 7.40014C71.3683 7.40014 70.1701 8.84203 69.6908 9.87474C69.6109 10.0306 69.551 10.1475 69.3912 10.1086C69.1316 10.0501 69.2514 9.77731 69.3313 9.60195C69.531 9.19276 69.6508 8.82255 69.6508 8.19903V8.05602C69.6508 7.77988 69.427 7.55602 69.1508 7.55602H67.5946C67.3185 7.55602 67.0946 7.77988 67.0946 8.05602V17.3441C67.0946 17.6203 67.3185 17.8441 67.5946 17.8441H69.1508C69.427 17.8441 69.6508 17.6203 69.6508 17.3441V13.6548C69.6508 11.2777 71.0088 9.6604 72.4867 9.6604C73.8247 9.6604 74.4438 10.3034 74.4438 12.6221V17.3441C74.4438 17.6203 74.6676 17.8441 74.9438 17.8441H76.5C76.7761 17.8441 77 17.6203 77 17.3441V11.7648C77 8.84203 75.4822 7.40014 73.2056 7.40014Z"
            fill="#44403C"
          />
        </>
      )}
    </svg>
  );
}
