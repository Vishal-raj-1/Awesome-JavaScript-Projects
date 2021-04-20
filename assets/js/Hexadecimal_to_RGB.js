function hex2rgb() {
            var hex_color = document.getElementById('hex-color').value
                , rgb_color = document.getElementById('rgb-color')
                , pattern_color = "^#([A-Fa-f0-9]{6})$";
            if (hex_color.match(pattern_color)) {
                var hex_color = hex_color.replace("#", "")
                    , r = parseInt(hex_color.substring(0, 2), 16)
                    , g = parseInt(hex_color.substring(2, 4), 16)
                    , b = parseInt(hex_color.substring(4, 6), 16);
                return rgb_color.value = 'rgb(' + r + ',' + g + ',' + b + ')';
            }
            else {
                alert('Error Color Format');
            }
        }