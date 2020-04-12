export const NumAutoPlusAnimation = (ref, finalNum, unit, fixedNum) => {
    ref.innerHTML = finalNum + unit;
    let time = 500 //总时间--毫秒为单位
    let regulator = 30 //调速器，改变regulator的数值可以调节数字改变的速度
    let step = finalNum / (time / regulator);   /*每50ms增加的数值--*/
    // console.log(step);
    let count = 0 //计数器
    let initial = 0;
    let timer = setInterval(function () {
        count += step;
        if (count >= finalNum) {
            clearInterval(timer);
            count = finalNum;
        }
        let t = count.toFixed(fixedNum);
        if (t === initial) {
            clearInterval(timer);
            return
        };
        initial = t;
        ref.innerHTML = initial + unit;
    }, regulator);
};
// 判断两对象是否相同
export const isObjectValueEqual = (a, b) => {
    let aProps = Object.getOwnPropertyNames(a);
    let bProps = Object.getOwnPropertyNames(b);
    if (aProps.length !== bProps.length) {
        return false;
    }
    for (var i = 0; i < aProps.length; i++) {
        let propName = aProps[i]
        let propA = a[propName]
        let propB = b[propName]
        if ((typeof (propA) === 'object')) {
            if (!isObjectValueEqual(propA, propB)) {
                return false
            }
        }
        else if (propA !== propB) {
            return false
        }
    }
    return true
}

export const getBrowserInfo = () => {
    let ua = navigator.userAgent.toLocaleLowerCase();
    let browserType = null;
    if (ua.match(/msie/) !== null || ua.match(/trident/) !== null) {
        browserType = "IE";
    } else if (ua.match(/firefox/) !== null) {
        browserType = "firefox";
    } else if (ua.match(/ubrowser/) !== null) {
        browserType = "UC";
    } else if (ua.match(/opera/) !== null) {
        browserType = "opera";
    } else if (ua.match(/bidubrowser/) !== null) {
        browserType = "Baidu";
    } else if (ua.match(/metasr/) !== null) {
        browserType = "SouGou";
    } else if (ua.match(/tencenttraveler/) !== null || ua.match(/qqbrowse/) !== null) {
        browserType = "QQ";
    } else if (ua.match(/maxthon/) !== null) {
        browserType = "AoYou";
    } else if (ua.match(/chrome/) !== null) {
        let is360 = _mime("type", "application/vnd.chromium.remoting-viewer");
        function _mime(option, value) {
            let mimeTypes = navigator.mimeTypes;
            for (let mt in mimeTypes) {
                if (mimeTypes[mt][option] === value) {
                    return true;
                }
            }
            return false;
        }
        if (is360) {
            browserType = '360';
        } else {
            browserType = "chrome";
        }
    } else if (ua.match(/safari/) !== null) {
        browserType = "Safari";
    }
    return browserType;
}

// 鼠标点击位置是否在此DOM上
export const isInTheDom = (dom, e) => {
    let flag = true;
    let x = e.clientX;
    let y = e.clientY;
    let divx1 = dom.offsetLeft;
    let divy1 = dom.offsetTop;
    let divx2 = dom.offsetLeft + dom.offsetWidth;
    let divy2 = dom.offsetTop + dom.offsetHeight;
    if (x < divx1 || x > divx2 || y < divy1 || y > divy2) {
        flag = false;
    }
    return flag;
}

// 时间戳转时间 => yyyy-MM-dd hh:mm:ss
export const timerToStr = (timer) => {
    let da = new Date(timer);
    let year = da.getFullYear();
    let month = da.getMonth() + 1 >= 10 ? da.getMonth() + 1 : `0${da.getMonth() + 1}`;
    let date = da.getDate() + 1 >= 10 ? da.getDate() + 1 : `0${da.getDate() + 1}`;
    let hour = da.getHours() + 1 >= 10 ? da.getHours() + 1 : `0${da.getHours() + 1}`;
    let min = da.getMinutes() + 1 >= 10 ? da.getMinutes() + 1 : `0${da.getMinutes() + 1}`;
    let sec = da.getSeconds() + 1 >= 10 ? da.getSeconds() + 1 : `0${da.getSeconds() + 1}`;
    return `${year}-${month}-${date} ${hour}:${min}:${sec}`;
}

// 时间戳转时间 => 4 November, 2019
export const timerToEngStr = (timer) => {
    let da = new Date(timer);
    let defaultMonthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let year = da.getFullYear();
    let month = da.getMonth() + 1;
    let date = da.getDate() + 1 >= 10 ? da.getDate() + 1 : `0${da.getDate() + 1}`;
    return `${date} ${defaultMonthList[month]}, ${year}`;
}