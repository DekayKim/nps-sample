export default function SvgIcon(props) {
    let rtnSVG, color, size, size2, isFill, strokeWidth;

    switch (props.name) {
        case 'emoji-1':
            rtnSVG = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64"><path d="m31.8 27.1c0 0-4.4.9-.8-6.6 2.6-5.4 2.3-11.7 0-15-3.8-5.3-11.1-3.6-10.3-.5 2.6 10.5-3.3 13.7-6.3 20.3-3.1 6.7-2.8 16.3-1.4 24.8.9 5.3 3.2 11.9 11.5 11.9h11.5l-4.2-34.9" fill="#ffdd67"></path><path d="m25.8 60.5c-8.3 0-10.1-6.6-11-11.9-1.4-8.5-1.6-15.3 1.1-22.2 3-7.5 6.1-7.7 6.1-22.5 0-.7.4-1.2.8-1.6-1.4.5-2.2 1.3-2.2 2.5 0 11.1-3.1 13.8-6.1 20.5-3.2 6.7-2.9 16.3-1.5 24.8.9 5.3 3.2 11.9 11.5 11.9h11.5v-1.5h-10.2" fill="#eba352"></path><path d="m46 35.8h-14.2c-5 0-5-8.7 0-8.7h14.2c5 0 5 8.7 0 8.7" fill="#ffdd67"></path><path d="m47.1 34.4h-14.2c-3.4 0-4.4-4-3.3-6.5-2.7 2.1-1.9 8 2.1 8h14.3c1.6 0 2.7-.9 3.3-2.2-.6.4-1.3.7-2.2.7" fill="#eba352"></path><path d="m47.5 44.6h-17c-6 0-6-8.7 0-8.7h17.1c5.9 0 5.9 8.7-.1 8.7" fill="#ffdd67"></path><path d="m48.9 43.1h-17.1c-4 0-5.3-4-3.9-6.5-3.2 2.1-2.3 8 2.6 8h17.1c1.9 0 3.2-.9 3.9-2.2-.7.4-1.6.7-2.6.7" fill="#eba352"></path><path d="m45.9 53.3h-14.4c-5 0-5-8.7 0-8.7h14.4c5.1 0 5.1 8.7 0 8.7" fill="#ffdd67"></path><path d="m47.1 51.8h-14.5c-3.4 0-4.5-4-3.3-6.6-2.7 2.1-2 8 2.2 8h14.4c1.6 0 2.7-.9 3.3-2.2-.5.6-1.3.8-2.1.8" fill="#eba352"></path><path d="m44.4 62h-9.3c-5.4 0-5.4-8.7 0-8.7h9.3c5.4 0 5.4 8.7 0 8.7" fill="#ffdd67"></path><path d="m45.6 60.6h-9.3c-3.6 0-4.8-4-3.5-6.6-2.9 2.1-2.1 8 2.3 8h9.3c1.8 0 2.9-.9 3.5-2.2-.6.5-1.4.8-2.3.8" fill="#eba352"></path></svg>;
            break;
        case 'emoji-2':
            rtnSVG = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64"><circle cx="32" cy="32" r="30" fill="#ffdd67"></circle><path d="m49.7 34.4c-.4-.5-1.1-.4-1.9-.4-15.8 0-15.8 0-31.6 0-.8 0-1.5-.1-1.9.4-3.9 5 .7 19.6 17.7 19.6 17 0 21.6-14.6 17.7-19.6" fill="#664e27"></path><path d="m33.8 41.7c-.6 0-1.5.5-1.1 2 .2.7 1.2 1.6 1.2 2.8 0 2.4-3.8 2.4-3.8 0 0-1.2 1-2 1.2-2.8.3-1.4-.6-2-1.1-2-1.6 0-4.1 1.7-4.1 4.6 0 3.2 2.7 5.8 6 5.8 3.3 0 6-2.6 6-5.8-.1-2.8-2.7-4.5-4.3-4.6" fill="#4c3526"></path><path d="m24.3 50.7c2.2 1 4.8 1.5 7.7 1.5 2.9 0 5.5-.6 7.7-1.5-2.1-1.1-4.7-1.7-7.7-1.7s-5.6.6-7.7 1.7" fill="#ff717f"></path><path d="m47 36c-15 0-15 0-29.9 0-2.1 0-2.1 4-.1 4 10.4 0 19.6 0 30 0 2 0 2-4 0-4" fill="#fff"></path><g fill="#65b1ef"><path d="m59.4 36.9c7.3 7.7-2.6 18.1-9.9 10.4-5.3-5.6-5.6-16.3-5.6-16.3s10.2.3 15.5 5.9"></path><path d="m14.5 47.3c-7.3 7.7-17.2-2.7-9.9-10.4 5.3-5.6 15.5-5.9 15.5-5.9s-.3 10.7-5.6 16.3"></path></g><g fill="#664e27"><path d="m28.5 28.7c-1.9-5.1-4.7-7.7-7.5-7.7s-5.6 2.6-7.5 7.7c-.2.5.8 1.4 1.3.9 1.8-1.9 4-2.7 6.2-2.7 2.2 0 4.4.8 6.2 2.7.6.5 1.5-.4 1.3-.9"></path><path d="m50.4 28.7c-1.9-5.1-4.7-7.7-7.5-7.7s-5.6 2.6-7.5 7.7c-.2.5.8 1.4 1.3.9 1.8-1.9 4-2.7 6.2-2.7s4.4.8 6.2 2.7c.5.5 1.5-.4 1.3-.9"></path></g></svg>;
            break;
        case 'emoji-3':
            rtnSVG = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64"><circle cx="32" cy="32" r="30" fill="#ffdd67"></circle><g fill="#664e27"><circle cx="20.5" cy="27.6" r="5"></circle><circle cx="43.5" cy="27.6" r="5"></circle><path d="m38.9 48h-13.8c-1.5 0-1.5-4 0-4h13.7c1.6 0 1.6 4 .1 4"></path></g></svg>;
            break;
        case 'emoji-4':
            rtnSVG = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64"><circle cx="32" cy="32" r="30" fill="#ffdd67"></circle><path d="m40.6 46.4c-5.4-2.5-11.8-2.5-17.2 0-1.3.6.3 4.2 1.7 3.5 3.6-1.7 8.9-2.3 13.9 0 1.3.6 3-2.8 1.6-3.5" fill="#664e27"></path><path d="m54 31c0 5-4 9-9 9-5 0-9-4-9-9 0-5 4-9 9-9 5 0 9 4 9 9" fill="#fff"></path><circle cx="45" cy="31" r="6" fill="#664e27"></circle><g fill="#fff"><ellipse cx="46.6" cy="35.5" rx="2.8" ry="3.2"></ellipse><ellipse cx="42.8" cy="31" rx="1.6" ry="1.9"></ellipse><path d="m28 31c0 5-4 9-9 9-5 0-9-4-9-9 0-5 4-9 9-9 5 0 9 4 9 9"></path></g><circle cx="19" cy="31" r="6" fill="#664e27"></circle><g fill="#fff"><ellipse cx="20.6" cy="35.5" rx="2.8" ry="3.2"></ellipse><ellipse cx="16.8" cy="31" rx="1.6" ry="1.9"></ellipse></g><path d="m47 36c-5.1 6.8-8 13-8 18.1 0 4.4 3.6 7.9 8 7.9 4.4 0 8-3.5 8-7.9 0-5.1-3-11.4-8-18.1" fill="#65b1ef"></path><g fill="#917524"><path d="m53.2 20.7c-3.2-2.7-7.5-3.9-11.7-3.1-.6.1-1.1-2-.4-2.2 4.8-.9 9.8.5 13.5 3.6.6.5-1 2.1-1.4 1.7"></path><path d="m22.5 17.4c-4.2-.7-8.5.4-11.7 3.1-.4.4-2-1.2-1.4-1.7 3.7-3.2 8.7-4.5 13.5-3.6.7.2.2 2.3-.4 2.2"></path></g></svg>;
            break;
        case 'emoji-5':
            rtnSVG = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64"><circle cx="32" cy="32" r="30" fill="#ef5350"></circle><path d="m41 49.7c-5.8-4.8-12.2-4.8-18 0-.7.6-1.3-.4-.8-1.3 1.8-3.4 5.3-6.5 9.8-6.5s8.1 3.1 9.8 6.5c.5.8-.1 1.8-.8 1.3" fill="#302424"></path><path d="m10.2 24.9c-1.5 4.7.6 10 5.3 12.1 4.6 2.2 10 .5 12.7-3.7l-6.9-7.7-11.1-.7" fill="#fff"></path><g fill="#302424"><path d="m14.2 25.8c-1.4 2.9-.1 6.4 2.8 7.7 2.9 1.4 6.4.1 7.7-2.8 1-1.9-9.6-6.8-10.5-4.9"></path><path d="m10.2 24.9c1.6-1 3.5-1.5 5.4-1.5 1.9 0 3.8.5 5.6 1.3 1.7.8 3.3 2 4.6 3.4 1.2 1.5 2.2 3.2 2.4 5.1-1.3-1.3-2.6-2.4-4-3.4-1.4-1-2.8-1.8-4.2-2.4-1.5-.7-3-1.2-4.6-1.7-1.8-.3-3.4-.6-5.2-.8"></path></g><path d="m53.8 24.9c1.5 4.7-.6 10-5.3 12.1-4.6 2.2-10 .5-12.7-3.7l6.9-7.7 11.1-.7" fill="#fff"></path><g fill="#302424"><path d="m49.8 25.8c1.4 2.9.1 6.4-2.8 7.7-2.9 1.4-6.4.1-7.7-2.8-1-1.9 9.6-6.8 10.5-4.9"></path><path d="m53.8 24.9c-1.6-1-3.5-1.5-5.4-1.5-1.9 0-3.8.5-5.6 1.3-1.7.8-3.3 2-4.6 3.4-1.2 1.5-2.2 3.2-2.4 5.1 1.3-1.3 2.6-2.4 4-3.4 1.4-1 2.8-1.8 4.2-2.4 1.5-.7 3-1.2 4.6-1.7 1.8-.3 3.4-.6 5.2-.8"></path></g></svg>;
            break;
        default:
            break;
    }
    return rtnSVG;
}