function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);

  return css;
}

var icons = {
  'poo': [512, 512, "M352,288a32,32,0,1,1-62.6-9.4A16,16,0,0,0,320,272a16.07,16.07,0,0,0-9.4-14.6A32.39,32.39,0,0,1,320,256,32,32,0,0,1,352,288ZM192,256a31.89,31.89,0,0,0-9.4,1.4A16,16,0,0,1,176,288a16.07,16.07,0,0,1-14.6-9.4A32.39,32.39,0,0,0,160,288a32,32,0,1,0,32-32Zm0,0a31.89,31.89,0,0,0-9.4,1.4A16,16,0,0,1,176,288a16.07,16.07,0,0,1-14.6-9.4A32.39,32.39,0,0,0,160,288a32,32,0,1,0,32-32ZM448,384H436.5C459,360.5,464,336.7,464,320a64.06,64.06,0,0,0-64-64H387.2l.3-.3C406.4,236.3,416,214.9,416,192a64.06,64.06,0,0,0-64-64H317.2c10.8-16,17.6-28.3,17.6-56,0-35.3-47.1-72-78.8-72,0,110.8-119.6,132.4-121.6,133.3C106.4,145.1,96,169.5,96,200c0,19.3,15.6,37.8,30.7,46.8-20.9,7.7-34.9,12.5-35.2,12.6C61.8,269.4,49,288.7,49,320c0,21.6,17.6,49.7,36.6,58.3-20.3,4.3-33.1,6.7-33.4,6.8C19.7,391.2,0,415,0,448c0,34.1,31,64,64,64H448a64,64,0,0,0,0-128ZM192,232a56,56,0,1,1-56,56A56,56,0,0,1,192,232ZM358.4,396.8a128,128,0,0,1-204.8,0A8,8,0,0,1,160,384H352A8,8,0,0,1,358.4,396.8ZM320,344a56,56,0,1,1,56-56A56,56,0,0,1,320,344ZM192,320a32,32,0,1,0-9.4-62.6A16,16,0,0,1,176,288a16.07,16.07,0,0,1-14.6-9.4A32.39,32.39,0,0,0,160,288,32,32,0,0,0,192,320Z"],
  'jack-o-lantern': [640, 512, "M354.8,97c2.7-8.4,7.6-17.4,15-22.3c14.7-9.8,18.7-29.7,8.9-44.4c-9.8-14.7-29.7-18.7-44.4-8.9 C318.5,32,305.7,48,297.5,67.7c-3.9,9.3-6.7,19.4-8.2,29C121.1,105,64,182.2,64,288c0,112,64,192,256,192s256-80,256-192 C576,183.1,519.8,106.2,354.8,97z M345.1,275.9l48-80c1.5-2.4,4-3.9,6.9-3.9s5.4,1.5,6.9,3.9l48,80c1.5,2.5,1.5,5.5,0.1,8.1 c-1.4,2.5-4.1,4.1-7,4.1h-96c-2.9,0-5.5-1.5-7-4.1C343.6,281.4,343.7,278.4,345.1,275.9z M185.1,275.9l48-80c1.5-2.4,4-3.9,6.9-3.9 s5.4,1.5,6.9,3.9l48,80c1.5,2.5,1.5,5.5,0.1,8.1c-1.4,2.5-4.1,4.1-7,4.1h-96c-2.9,0-5.5-1.5-7-4.1 C183.6,281.4,183.7,278.4,185.1,275.9z M495.7,338.2c-8.2,28.8-30.6,53-64.6,70c-4.8,2.4-9.8,4.6-15,6.7V392c0-4.4-3.6-8-8-8h-16 c-4.4,0-8,3.6-8,8v32.8c-20.2,4.8-41.9,7.2-64,7.2s-43.8-2.5-64-7.2V392c0-4.4-3.6-8-8-8h-16c-4.4,0-8,3.6-8,8v22.8 c-5.2-2-10.2-4.3-15-6.7c-34-16.9-56.4-41.1-64.6-70c-0.8-2.9,0-6,2.2-8c1.5-1.4,3.5-2.2,5.5-2.2c0.9,0,1.8,0.2,2.7,0.5 c34.2,12.4,81.5,20.4,133.3,22.8V376c0,4.4,3.6,8,8,8h16c4.4,0,8-3.6,8-8v-24c63.9,0,124.2-8.6,165.3-23.5c0.9-0.3,1.8-0.5,2.7-0.5 c2,0,4,0.7,5.5,2.2C495.7,332.2,496.5,335.3,495.7,338.2L495.7,338.2z", "M320,492.5c-47.7,0-89.5-5-124.4-14.7c-33.7-9.4-61.8-23.7-83.7-42.3C71.8,401.5,51.5,351.8,51.5,288 c0-60,18-107.5,53.5-141.3c37.8-35.9,96.3-56.7,173.9-61.9c1.8-7.6,4.1-14.9,7.1-21.9c9.1-21.9,23.4-39.8,41.4-51.8 c7.4-4.9,15.9-7.5,24.7-7.5c15,0,28.8,7.4,37.1,19.8c13.6,20.4,8.1,48.1-12.4,61.7c-0.4,0.3-0.8,0.6-1.2,0.9 c71.1,6.7,125,27.4,160.4,61.6c34.9,33.7,52.5,80.9,52.5,140.4c0,63.8-20.3,113.5-60.4,147.5c-21.9,18.6-50.1,32.8-83.7,42.3 C409.5,487.6,367.7,492.5,320,492.5z M352,8.5c-7.8,0-15.4,2.3-21.9,6.6c-17.1,11.5-30.8,28.7-39.5,49.6c-3.1,7.3-5.5,15-7.2,22.9 l-0.4,1.8l-1.9,0.1c-77.4,4.9-135.5,25.3-172.7,60.7C74,183.1,56.5,229.4,56.5,288c0,62.3,19.7,110.6,58.6,143.7 c21.3,18.1,48.9,32,81.8,41.3c34.4,9.6,75.8,14.5,123,14.5c47.2,0,88.6-4.9,123-14.5c33-9.2,60.5-23.1,81.8-41.3 c38.9-33.1,58.6-81.4,58.6-143.7c0-58.1-17.2-104.1-51-136.8c-35.4-34.2-90-54.6-162.5-60.7l-4.5-0.4l2.7-3.6 c1.8-2.4,3.7-4.3,5.7-5.6c18.1-12.1,23.1-36.7,11-54.8C377.6,15.1,365.3,8.5,352,8.5z"]
};

function make(options) {
  var width = options.width,
      height = options.height,
      layers = options.layers,
      duotone = options.duotone,
      extraClasses = options.extraClasses;


  var pathD = layers;

  var paths = [];

  for (var i = 0; i < (duotone ? layers.length : 1); i++) {
    paths.push('<path class="l-' + (i + 1) + '" d="' + layers[i] + '" />');
  }

  return '<svg class="fa-replaced ' + extraClasses + '" xmlns="http://www.w3.org/2000/svg" style="vertical-align: -12.5%; height: 1em" viewBox="0 0 ' + width + ' ' + height + '" >' + paths.join('') + '</svg>';
}

var toArray = function (arr) {
  return Array.isArray(arr) ? arr : Array.from(arr);
};

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

function classParser(node) {
  return [].concat(toConsumableArray(node.classList)).reduce(function (acc, cls) {
    if (cls === 'fa') {
      return acc;
    }
    if (cls === 'fad') {
      acc.duotone = true;return acc;
    }

    if (cls.startsWith('fa-')) {
      acc.icon = cls.split('-').slice(1).join('-');
    } else {
      acc.rest.push(cls);
    }

    console.log(acc);

    return acc;
  }, { duotone: false, icon: '', rest: [] });
}

___$insertStyle(".fa-replaced path {\n  fill: currentColor; }\n\n.fa-replaced path.l-2 {\n  opacity: 0.5; }\n");

document.addEventListener('DOMContentLoaded', function (_event) {
  [].concat(toConsumableArray(document.querySelectorAll('.fa, .fad'))).forEach(function (node) {
    var iconClasses = classParser(node);
    var icon = iconClasses.icon,
        duotone = iconClasses.duotone;


    if (icon && icons[icon]) {
      var _icons$icon = toArray(icons[icon]),
          width = _icons$icon[0],
          height = _icons$icon[1],
          layers = _icons$icon.slice(2);

      var val = make({
        width: width,
        height: height,
        layers: layers,
        duotone: duotone,
        extraClasses: iconClasses.rest
      });

      node.outerHTML = val;
    }
  });
});
