// from Michel.j ©2015 Webull.ch Design
(function(win, doc, exports, undefined) {

    'use strict';
  
    var fnTest = /xyz/.test(function() {
      xyz;
    }) ? /\b_super\b/ : /.*/;
  
    function Class() { /* noop. */ }
  
    Class.extend = function(props) {
  
      var SuperClass = this;
  
      function Class() {
        if (typeof this.init === 'function') {
          this.init.apply(this, arguments);
        }
      }
  
      Class.prototype = Object.create(SuperClass.prototype, {
        constructor: {
          value: Class,
          writable: true,
          configurable: true
        }
      });
  
      Object.keys(props).forEach(function(key) {
        var prop = props[key],
          _super = SuperClass.prototype[key],
          isMethodOverride = (typeof prop === 'function' && typeof _super === 'function' && fnTest.test(prop));
  
        if (isMethodOverride) {
          Class.prototype[key] = function() {
            var ret,
              tmp = this._super;
  
            Object.defineProperty(this, '_super', {
              value: _super,
              configurable: true
            });
  
            ret = prop.apply(this, arguments);
  
            Object.defineProperty(this, '_super', {
              value: tmp,
              configurable: true
            });
  
            return ret;
          };
        } else {
          Class.prototype[key] = prop;
        }
      });
  
      Class.extend = SuperClass.extend;
  
      return Class;
    };
  
    exports.Class = Class;
  }(window, window.document, window));;
  (function(win, doc) {
  
    var cos = Math.cos,
      sin = Math.sin;
  
    function epsilon(value) {
      return Math.abs(value) < 0.000001 ? 0 : value;
    }
  
    function Matrix4() {}
  
    Matrix4.createMatrix = function() {
      return this.identity(this.create());
    };
  
    Matrix4.create = function() {
      return new Float32Array(16);
    };
  
    Matrix4.copy = function(mat, dest) {
      dest[0] = mat[0];
      dest[1] = mat[1];
      dest[2] = mat[2];
      dest[3] = mat[3];
      dest[4] = mat[4];
      dest[5] = mat[5];
      dest[6] = mat[6];
      dest[7] = mat[7];
      dest[8] = mat[8];
      dest[9] = mat[9];
      dest[10] = mat[10];
      dest[11] = mat[11];
      dest[12] = mat[12];
      dest[13] = mat[13];
      dest[14] = mat[14];
      dest[15] = mat[15];
      return dest;
    };
  
    Matrix4.identity = function(dest) {
      dest[0] = 1;
      dest[1] = 0;
      dest[2] = 0;
      dest[3] = 0;
      dest[4] = 0;
      dest[5] = 1;
      dest[6] = 0;
      dest[7] = 0;
      dest[8] = 0;
      dest[9] = 0;
      dest[10] = 1;
      dest[11] = 0;
      dest[12] = 0;
      dest[13] = 0;
      dest[14] = 0;
      dest[15] = 1;
      return dest;
    };
  
    Matrix4.multiply = function(mat1, mat2, dest) {
      var a = mat1[0],
        b = mat1[1],
        c = mat1[2],
        d = mat1[3],
        e = mat1[4],
        f = mat1[5],
        g = mat1[6],
        h = mat1[7],
        i = mat1[8],
        j = mat1[9],
        k = mat1[10],
        l = mat1[11],
        m = mat1[12],
        n = mat1[13],
        o = mat1[14],
        p = mat1[15],
        A = mat2[0],
        B = mat2[1],
        C = mat2[2],
        D = mat2[3],
        E = mat2[4],
        F = mat2[5],
        G = mat2[6],
        H = mat2[7],
        I = mat2[8],
        J = mat2[9],
        K = mat2[10],
        L = mat2[11],
        M = mat2[12],
        N = mat2[13],
        O = mat2[14],
        P = mat2[15];
  
      dest[0] = A * a + B * e + C * i + D * m;
      dest[1] = A * b + B * f + C * j + D * n;
      dest[2] = A * c + B * g + C * k + D * o;
      dest[3] = A * d + B * h + C * l + D * p;
      dest[4] = E * a + F * e + G * i + H * m;
      dest[5] = E * b + F * f + G * j + H * n;
      dest[6] = E * c + F * g + G * k + H * o;
      dest[7] = E * d + F * h + G * l + H * p;
      dest[8] = I * a + J * e + K * i + L * m;
      dest[9] = I * b + J * f + K * j + L * n;
      dest[10] = I * c + J * g + K * k + L * o;
      dest[11] = I * d + J * h + K * l + L * p;
      dest[12] = M * a + N * e + O * i + P * m;
      dest[13] = M * b + N * f + O * j + P * n;
      dest[14] = M * c + N * g + O * k + P * o;
      dest[15] = M * d + N * h + O * l + P * p;
  
      return dest;
    };
  
    Matrix4.scale = function(mat, vec, dest) {
      dest[0] = mat[0] * vec[0];
      dest[1] = mat[1] * vec[0];
      dest[2] = mat[2] * vec[0];
      dest[3] = mat[3] * vec[0];
      dest[4] = mat[4] * vec[1];
      dest[5] = mat[5] * vec[1];
      dest[6] = mat[6] * vec[1];
      dest[7] = mat[7] * vec[1];
      dest[8] = mat[8] * vec[2];
      dest[9] = mat[9] * vec[2];
      dest[10] = mat[10] * vec[2];
      dest[11] = mat[11] * vec[2];
      dest[12] = mat[12];
      dest[13] = mat[13];
      dest[14] = mat[14];
      dest[15] = mat[15];
  
      return dest;
    };
  
    Matrix4.lookAt = function(eye, center, up, dest) {
      var eyeX = eye[0],
        eyeY = eye[1],
        eyeZ = eye[2],
        upX = up[0],
        upY = up[1],
        upZ = up[2],
        centerX = center[0],
        centerY = center[1],
        centerZ = center[2];
  
      if (eyeX == centerX && eyeY == centerY && eyeZ == centerZ) {
        return this.identity(dest);
      }
  
      var x0, x1, x2, y0, y1, y2, z0, z1, z2, l;
  
      z0 = eyeX - center[0];
      z1 = eyeY - center[1];
      z2 = eyeZ - center[2];
      l = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
      z0 *= l;
      z1 *= l;
      z2 *= l;
      x0 = upY * z2 - upZ * z1;
      x1 = upZ * z0 - upX * z2;
      x2 = upX * z1 - upY * z0;
      l = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
  
      if (!l) {
        x0 = 0;
        x1 = 0;
        x2 = 0;
      } else {
        l = 1 / l;
        x0 *= l;
        x1 *= l;
        x2 *= l;
      }
  
      y0 = z1 * x2 - z2 * x1;
      y1 = z2 * x0 - z0 * x2;
      y2 = z0 * x1 - z1 * x0;
      l = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
  
      if (!l) {
        y0 = 0;
        y1 = 0;
        y2 = 0;
      } else {
        l = 1 / l;
        y0 *= l;
        y1 *= l;
        y2 *= l;
      }
  
      dest[0] = x0;
      dest[1] = y0;
      dest[2] = z0;
      dest[3] = 0;
      dest[4] = x1;
      dest[5] = y1;
      dest[6] = z1;
      dest[7] = 0;
      dest[8] = x2;
      dest[9] = y2;
      dest[10] = z2;
      dest[11] = 0;
      dest[12] = -(x0 * eyeX + x1 * eyeY + x2 * eyeZ);
      dest[13] = -(y0 * eyeX + y1 * eyeY + y2 * eyeZ);
      dest[14] = -(z0 * eyeX + z1 * eyeY + z2 * eyeZ);
      dest[15] = 1;
  
      return dest;
    };
  
    Matrix4.perspective = function(fovy, aspect, near, far, dest) {
      var t = near * Math.tan(fovy * Math.PI / 360);
      var r = t * aspect;
      var a = r * 2,
        b = t * 2,
        c = far - near;
      dest[0] = near * 2 / a;
      dest[1] = 0;
      dest[2] = 0;
      dest[3] = 0;
      dest[4] = 0;
      dest[5] = near * 2 / b;
      dest[6] = 0;
      dest[7] = 0;
      dest[8] = 0;
      dest[9] = 0;
      dest[10] = -(far + near) / c;
      dest[11] = -1;
      dest[12] = 0;
      dest[13] = 0;
      dest[14] = -(far * near * 2) / c;
      dest[15] = 0;
      return dest;
    };
  
    Matrix4.translate = function(mat, vec, dest) {
      dest[0] = mat[0];
      dest[1] = mat[1];
      dest[2] = mat[2];
      dest[3] = mat[3];
      dest[4] = mat[4];
      dest[5] = mat[5];
      dest[6] = mat[6];
      dest[7] = mat[7];
      dest[8] = mat[8];
      dest[9] = mat[9];
      dest[10] = mat[10];
      dest[11] = mat[11];
      dest[12] = mat[0] * vec[0] + mat[4] * vec[1] + mat[8] * vec[2] + mat[12];
      dest[13] = mat[1] * vec[0] + mat[5] * vec[1] + mat[9] * vec[2] + mat[13];
      dest[14] = mat[2] * vec[0] + mat[6] * vec[1] + mat[10] * vec[2] + mat[14];
      dest[15] = mat[3] * vec[0] + mat[7] * vec[1] + mat[11] * vec[2] + mat[15];
      return dest;
    };
  
    Matrix4.rotate = function(mat, angle, axis, dest) {
      var sq = Math.sqrt(axis[0] * axis[0] + axis[1] * axis[1] + axis[2] * axis[2]);
  
      if (!sq) {
        return null;
      }
  
      var a = axis[0],
        b = axis[1],
        c = axis[2];
  
      //normalize.
      if (sq != 1) {
        sq = 1 / sq;
        a *= sq;
        b *= sq;
        c *= sq;
      }
  
      var d = sin(angle),
        e = cos(angle),
        f = 1 - e,
        g = mat[0],
        h = mat[1],
        i = mat[2],
        j = mat[3],
        k = mat[4],
        l = mat[5],
        m = mat[6],
        n = mat[7],
        o = mat[8],
        p = mat[9],
        q = mat[10],
        r = mat[11],
  
        //m11
        s = a * a * f + e,
        //m12
        t = b * a * f + c * d,
        //m13
        u = c * a * f - b * d,
        //m21
        v = a * b * f - c * d,
        //m22
        w = b * b * f + e,
        //m23
        x = c * b * f + a * d,
        //m31
        y = a * c * f + b * d,
        //m32
        z = b * c * f - a * d,
        //m33
        A = c * c * f + e;
  
      if (angle) {
        if (mat != dest) {
          dest[12] = mat[12];
          dest[13] = mat[13];
          dest[14] = mat[14];
          dest[15] = mat[15];
        }
      } else {
        dest = mat;
      }
  
      dest[0] = g * s + k * t + o * u;
      dest[1] = h * s + l * t + p * u;
      dest[2] = i * s + m * t + q * u;
      dest[3] = j * s + n * t + r * u;
      dest[4] = g * v + k * w + o * x;
      dest[5] = h * v + l * w + p * x;
      dest[6] = i * v + m * w + q * x;
      dest[7] = j * v + n * w + r * x;
      dest[8] = g * y + k * z + o * A;
      dest[9] = h * y + l * z + p * A;
      dest[10] = i * y + m * z + q * A;
      dest[11] = j * y + n * z + r * A;
  
      return dest;
    };
  
    Matrix4.inverse = function(mat, dest) {
      var a = mat[0],
        b = mat[1],
        c = mat[2],
        d = mat[3],
        e = mat[4],
        f = mat[5],
        g = mat[6],
        h = mat[7],
        i = mat[8],
        j = mat[9],
        k = mat[10],
        l = mat[11],
        m = mat[12],
        n = mat[13],
        o = mat[14],
        p = mat[15],
        q = a * f - b * e,
        r = a * g - c * e,
        s = a * h - d * e,
        t = b * g - c * f,
        u = b * h - d * f,
        v = c * h - d * g,
        w = i * n - j * m,
        x = i * o - k * m,
        y = i * p - l * m,
        z = j * o - k * n,
        A = j * p - l * n,
        B = k * p - l * o,
        ivd = 1 / (q * B - r * A + s * z + t * y - u * x + v * w);
  
      dest[0] = (f * B - g * A + h * z) * ivd;
      dest[1] = (-b * B + c * A - d * z) * ivd;
      dest[2] = (n * v - o * u + p * t) * ivd;
      dest[3] = (-j * v + k * u - l * t) * ivd;
      dest[4] = (-e * B + g * y - h * x) * ivd;
      dest[5] = (a * B - c * y + d * x) * ivd;
      dest[6] = (-m * v + o * s - p * r) * ivd;
      dest[7] = (i * v - k * s + l * r) * ivd;
      dest[8] = (e * A - f * y + h * w) * ivd;
      dest[9] = (-a * A + b * y - d * w) * ivd;
      dest[10] = (m * u - n * s + p * q) * ivd;
      dest[11] = (-i * u + j * s - l * q) * ivd;
      dest[12] = (-e * z + f * x - g * w) * ivd;
      dest[13] = (a * z - b * x + c * w) * ivd;
      dest[14] = (-m * t + n * r - o * q) * ivd;
      dest[15] = (i * t - j * r + k * q) * ivd;
  
      return dest;
    };
  
    Matrix4.toString = function(mat) {
      var ret = '';
      var tmp = '';
  
      for (var i = 0, l = mat.length; i < l; i++) {
        tmp = '' + mat[i];
        if (/e/i.test(tmp)) {
          tmp = '' + (mat[i] | 0);
        }
        ret += (i !== 0 ? ',' : '') + tmp;
      }
      return ret;
    };
  
    Matrix4.getCameraCSSMatrix = function(mat) {
  
      //this.transformToCSSMatrix(mat, mat);
  
      return 'matrix3d(' +
        epsilon(mat[0]) + ',' +
        epsilon(mat[1]) + ',' +
        epsilon(mat[2]) + ',' +
        epsilon(mat[3]) + ',' +
        epsilon(mat[4]) + ',' +
        epsilon(mat[5]) + ',' +
        epsilon(mat[6]) + ',' +
        epsilon(mat[7]) + ',' +
        epsilon(mat[8]) + ',' +
        epsilon(mat[9]) + ',' +
        epsilon(mat[10]) + ',' +
        epsilon(mat[11]) + ',' +
        epsilon(mat[12]) + ',' +
        epsilon(mat[13]) + ',' +
        epsilon(mat[14]) + ',' +
        epsilon(mat[15]) +
        ')';
    };
  
    Matrix4.transformToCSSMatrix = function(mat, dest) {
  
      dest[0] = epsilon(mat[0]);
      dest[1] = epsilon(-mat[1]);
      dest[2] = epsilon(mat[2]);
      dest[3] = epsilon(mat[3]);
      dest[4] = epsilon(mat[4]);
      dest[5] = epsilon(-mat[5]);
      dest[6] = epsilon(mat[6]);
      dest[7] = epsilon(mat[7]);
      dest[8] = epsilon(mat[8]);
      dest[9] = epsilon(-mat[9]);
      dest[10] = epsilon(mat[10]);
      dest[11] = epsilon(mat[11]);
      dest[12] = epsilon(mat[12]);
      dest[13] = epsilon(-mat[13]);
      dest[14] = epsilon(mat[14]);
      dest[15] = epsilon(mat[15]);
  
      return dest;
    };
  
    Matrix4.prototype = {
      constructor: Matrix4,
  
      createMatrix: Matrix4.createMatrix,
      create: Matrix4.create,
      copy: Matrix4.copy,
      identity: Matrix4.identity,
      multiply: Matrix4.multiply,
      scale: Matrix4.scale,
      lookAt: Matrix4.lookAt,
      perspective: Matrix4.perspective,
      translate: Matrix4.translate,
      rotate: Matrix4.rotate,
      inverse: Matrix4.inverse,
      toString: Matrix4.toString,
      getCameraCSSMatrix: Matrix4.getCameraCSSMatrix,
      transformToCSSMatrix: Matrix4.transformToCSSMatrix
    };
  
    (win.CSS3D || (win.CSS3D = {})).Matrix4 = Matrix4;
  
  }(window, window.document));;
  (function(win, doc, Class) {
  
    var EventDispatcher = Class.extend({
  
      /**
       *  @param {string}   typ
       *  @param {?Object=} opt_evt
       *  @return {void}
       */
      trigger: function(typ, opt_evt) {
  
        if (!typ) {
          throw "INVALID EVENT TYPE " + typ;
        }
  
        var obj = this.handlers || (this.handlers = {}),
          arr = [].concat(obj[typ] || []), //Use copy
          evt = opt_evt || {},
          len, i, fnc;
  
        evt.type || (evt.type = typ);
  
        // handle specified event type
        for (i = 0, len = arr.length; i < len; ++i) {
          (fnc = arr[i][0]) && fnc.call(arr[i][1] || this, this, evt);
        }
  
        // handle wildcard "*" event
        arr = obj["*"] || [];
        for (i = 0, len = arr.length; i < len; ++i) {
          (fnc = arr[i][0]) && fnc.call(arr[i][1] || this, this, evt);
        }
      },
  
      /**
       *  @param {string} typ
       *  @param {function(evt:Object):void} fnc
       *  @param {Object} [context] if would like to be called context is set this param.
       *  @return {void}
       */
      on: function(typ, fnc, context) {
  
        if (!typ) {
          throw "addEventListener:INVALID EVENT TYPE " + typ + " " + fnc;
        }
  
        var obj = this.handlers || (this.handlers = {});
  
        (obj[typ] || (obj[typ] = [])).push([fnc, context]);
      },
  
      /**
       *  @param {string} typ
       *  @param {function(evt:object):void} fnc
       */
      off: function(typ, fnc) {
        if (!typ) {
          throw "removeEventListener:INVALID EVENT TYPE " + typ + " " + fn;
        }
  
        var obj = this.handlers || (this.handlers = {}),
          arr = obj[typ] || [],
          i = arr.length;
  
        while (i) {
          arr[--i][0] === fnc && arr.splice(i, 1);
        }
      },
  
      one: function(typ, fnc, context) {
  
        var self = this;
  
        function _fnc() {
  
          self.removeEventListener(typ, _fnc, context);
          fnc.apply(context || self, arguments);
        }
  
        this.addEventListener(typ, _fnc, context);
      }
    });
  
    (win.CSS3D || (win.CSS3D = {})).EventDispatcher = EventDispatcher;
  
  }(window, window.document, window.Class));;
  (function(win, doc, Matrix4, EventDispatcher) {
  
    var PI = Math.PI;
    var DEG_TO_RAD = PI / 180;
  
    var Object3D = EventDispatcher.extend({
  
      className: 'Object3D',
  
      init: function() {
        this.el = doc.createElement('div');
        this.el.className = this.className;
        this.el.CSS3DObject = this;
  
        this.children = [];
  
        this.position = new CSS3D.Vector3(0, 0, 0);
  
        this.m = new Matrix4();
        this.matrix = Matrix4.createMatrix();
        this.matrixWorld = Matrix4.createMatrix();
        this.translateMatrix = Matrix4.createMatrix();
        this.scaleMatrix = Matrix4.createMatrix();
        this.rotateMatrix = Matrix4.createMatrix();
  
        this.updateMatrixWorld();
      },
  
      /**
       * Add object.
       * @param {Object3D} object
       */
      add: function(object) {
  
        if (this === object) {
          return null;
        }
        if (object.parent != null) {
          object.parent.remove(object);
        }
        this.children.push(object);
        object.parent = this;
  
        this.el.appendChild(object.el);
      },
  
      /**
       * Remove object.
       * @param {Object3D} object
       * @return {Object3D}
       */
      remove: function(object) {
        var index, ret;
        if (this === object) {
          return null;
        }
  
        index = this.children.indexOf(object);
  
        if (index === -1) {
          return null;
        }
  
        ret = this.children.splice(index, 1);
  
        return ret;
      },
  
      updateMatrix: function() {
        //OpenGL
        //translate * rotation * scale
        var mat = Matrix4.createMatrix();
        Matrix4.multiply(mat, this.translateMatrix, mat);
        Matrix4.multiply(mat, this.rotateMatrix, mat);
        Matrix4.multiply(mat, this.scaleMatrix, mat);
        this.matrix = mat;
  
        this.updateMatrixWorld();
      },
  
      updateMatrixWorld: function() {
        if (!this.parent) {
          Matrix4.copy(this.matrix, this.matrixWorld);
        } else {
          Matrix4.multiply(this.parent.matrixWorld, this.matrix, this.matrixWorld);
        }
  
        var children = this.children;
  
        for (var i = 0, l = children.length; i < l; i++) {
          children[i].updateMatrixWorld();
        }
      },
  
      updateStyle: function() {
        if ('transform' in this.el.style) {
          this.el.style.transform = this.m.getCameraCSSMatrix(this.matrix);
        } else {
          this.el.style.webkitTransform = this.m.getCameraCSSMatrix(this.matrix);
        }
      },
  
      scale: function(scale) {
        Matrix4.scale(this.scaleMatrix, scale, this.scaleMatrix);
        this.updateMatrix();
        this.updateStyle();
      },
      translate: function(translate) {
        Matrix4.translate(this.translateMatrix, translate, this.translateMatrix);
        this.updateMatrix();
        this.updateStyle();
      },
      rotateX: function(angle) {
        var rad = angle * DEG_TO_RAD;
        Matrix4.rotate(this.rotateMatrix, rad, [1, 0, 0], this.rotateMatrix);
        this.updateMatrix();
        this.updateStyle();
      },
      rotateY: function(angle) {
        var rad = angle * DEG_TO_RAD;
        Matrix4.rotate(this.rotateMatrix, rad, [0, 1, 0], this.rotateMatrix);
        this.updateMatrix();
        this.updateStyle();
      },
      rotateZ: function(angle) {
        var rad = angle * DEG_TO_RAD;
        Matrix4.rotate(this.rotateMatrix, rad, [0, 0, 1], this.rotateMatrix);
        this.updateMatrix();
        this.updateStyle();
      }
    });
  
    (win.CSS3D || (win.CSS3D = {})).Object3D = Object3D;
  
  }(window, window.document, window.CSS3D.Matrix4, window.CSS3D.EventDispatcher));;
  (function(win, doc, CSS3D, Class) {
  
    /**
     * Vector3 class
     * @constructor
     * @param {number} x Position of x.
     * @param {number} y Position of y.
     * @param {number} z Position of z.
     */
  
    var Vector3 = Class.extend({
      init: function(x, y, z) {
        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
      },
      zero: function() {
        this.x = this.y = this.z = 0;
        return this;
      },
  
      equal: function(v) {
        return (this.x === v.x) && (this.y === v.y) && (this.z === v.z);
      },
  
      set: function(x, y, z) {
        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
        return this;
      },
  
      sub: function(v) {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
        return this
      },
  
      subVectors: function(a, b) {
        this.x = a.x - b.x;
        this.y = a.y - b.y;
        this.z = a.z - b.z;
        return this;
      },
  
      add: function(v) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        return this;
      },
  
      addVectors: function(a, b) {
        this.x = a.x + b.x;
        this.y = a.y + b.y;
        this.z = a.z + b.z;
        return this;
      },
  
      copy: function(v) {
        this.x = v.x;
        this.y = v.y;
        this.z = v.z;
        return this;
      },
  
      norm: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
      },
  
      normalize: function() {
        var nrm = this.norm();
  
        if (nrm !== 0) {
          nrm = 1 / nrm;
          this.x *= nrm;
          this.y *= nrm;
          this.z *= nrm;
        }
  
        return this;
      },
  
      multiply: function(v) {
        this.x *= v.x;
        this.y *= v.y;
        this.z *= v.z;
  
        return this;
      },
  
      //scalar multiplication
      multiplyScalar: function(s) {
        this.x *= s;
        this.y *= s;
        this.z *= s;
        return this;
      },
  
      multiplyVectors: function(a, b) {
        this.x = a.x * b.x;
        this.y = a.y * b.y;
        this.z = a.z * b.z;
        return this;
      },
  
      //dot product
      dot: function(v) {
        return this.x * v.x + this.y * v.y + this.z * v.z;
      },
  
      cross: function(v, w) {
  
        if (w) {
          return this.crossVectors(v, w);
        }
  
        x = this.x;
        y = this.y;
        z = this.z;
  
        this.x = (y * v.z) - (z * v.y);
        this.y = (z * v.x) - (x * v.z);
        this.z = (x * v.y) - (y * v.x);
  
        return this;
      },
  
      //cross product
      crossVectors: function(v, w) {
        this.x = (w.y * v.z) - (w.z * v.y);
        this.y = (w.z * v.x) - (w.x * v.z);
        this.z = (w.x * v.y) - (w.y * v.x);
  
        return this;
      },
  
      applyMatrix4: function(m) {
        x = this.x;
        y = this.y;
        z = this.z;
  
        this.x = m[0] * x + m[4] * y + m[8] * z + m[12];
        this.y = m[1] * x + m[5] * y + m[9] * z + m[13];
        this.z = m[2] * x + m[6] * y + m[10] * z + m[14];
  
        return this;
      },
  
      applyMatrix4withoutW: function(m) {
        var clone = this.clone();
  
        x = clone.x;
        y = clone.y;
        z = clone.z;
  
        clone.x = m[0] * x + m[4] * y + m[8] * z;
        clone.y = m[1] * x + m[5] * y + m[9] * z;
        clone.z = m[2] * x + m[6] * y + m[10] * z;
  
        return clone;
      },
  
      clone: function() {
        var vec3 = new Vector3();
        vec3.copy(this);
        return vec3;
      },
  
      toArray: function() {
        return [this.x, this.y, this.z];
      },
  
      toString: function() {
        return '' + this.x + ',' + this.y + ',' + this.z;
      }
    });
  
    (win.CSS3D || (win.CSS3D = {})).Vector3 = Vector3;
  
  }(window, window.document, window.CSS3D, window.Class));;
  (function(win, doc, CSS3D, Class) {
  
    var history_type_map = {
      'top': {
        'left': 'a',
        'right': 'b'
      },
      'bottom': {
        'left': 'c',
        'right': 'd'
      },
      'front': {
        'left': 'e',
        'right': 'f'
      },
      'back': {
        'left': 'g',
        'right': 'h'
      },
      'left': {
        'left': 'i',
        'right': 'j'
      },
      'right': {
        'left': 'k',
        'right': 'l'
      },
      'middle1': {
        'left': 'm',
        'right': 'n'
      },
      'middle2': {
        'left': 'o',
        'right': 'p'
      },
      'middle3': {
        'left': 'q',
        'right': 'r'
      }
    };
  
    /**
     * History class.
     * @constructor
     */
    var History = Class.extend({
  
      init: function() {
        this.clear();
      },
  
      /**
       * Get history data using index.
       * @param  {number} index history index number.
       * @return {Object}       a history data.
       */
      getAt: function(index) {
        var type = this.history[index];
        return this._decodeHistory(type);
      },
  
      /**
       * Add a new history.
       * @param {Object} data a history data.
       */
      add: function(data) {
        var history = this._encodeHistory(data);
        this.history.push(history);
      },
  
      /**
       * Clear the history.
       */
      clear: function() {
        this.history = [];
      },
  
      /**
       * Return history length.
       * @return {number} History length.
       */
      length: function() {
        return this.history.length;
      },
  
      /**
       * Decode history from a charactor.
       * @param  {string} data a charactor.
       * @return {Object}      an object contains `type` and `direction`.
       */
      _decodeHistory: function(data) {
        for (var key in history_type_map) {
          for (var type in history_type_map[key]) {
            if (history_type_map[key][type] === data) {
              return {
                type: key,
                direction: (type === 'left') ? 1 : -1
              };
            }
          }
        }
      },
  
      /**
       * Encode a history from an object.
       * @param  {Object} data an object as history that contains `type` and `direction`.
       * @return {string}      a charactor as history type.
       */
      _encodeHistory: function(data) {
        var dir = (data.direction > 0) ? 'left' : 'right';
        return history_type_map[data.type][dir];
      }
    });
  
    (win.CSS3D || (win.CSS3D = {})).History = History;
  
  }(window, window.document, window.CSS3D, window.Class));;
  (function(win, doc, CSS3D, Matrix4) {
  
    var PI = Math.PI;
    var DEG_TO_RAD = PI / 180;
  
    var Cube = CSS3D.Object3D.extend({
      className: 'cube',
      cubeId: null,
  
      /**
       * @param {number} size width and height size.
       * @param {number} n RubikCube count.
       * @param {number} index current index number.
       */
      init: function(size, n, index) {
        this.pseudoMatrixWorld = Matrix4.createMatrix();
        this._super();
  
        size = size || 50;
        var _2n = n * 2;
        var _n2 = n * n;
        var _2n2 = (n * n) * 2;
        var opt = {};
        var noOpt = {
          color: 'black'
        };
  
        //var top = new CSS3D.Face(size, size, 'blue', 'http://placekitten.com/' + size + '/' + size);
  
        //For TOP.
        if (index % _n2 < n) {
          opt = {
            color: 'white',
            useController: true
          };
        } else {
          opt = noOpt;
        }
  
        var top = new CSS3D.Face(size, size, opt);
        top.rotateX(90);
        top.translate([0, -size / 2, 0]);
        this.add(top);
  
        //For BOTTOM.
        if (index % _n2 >= _2n) {
          opt = {
            color: 'blue',
            useController: true
          };
        } else {
          opt = noOpt;
        }
  
        var bottom = new CSS3D.Face(size, size, opt);
        bottom.rotateX(-90);
        bottom.translate([0, size / 2, 0]);
        this.add(bottom);
  
        //For FRONT.
        if (_2n2 <= index) {
          opt = {
            color: 'orange',
            useController: true
          };
        } else {
          opt = noOpt;
        }
  
        var front = new CSS3D.Face(size, size, opt);
        front.translate([0, 0, size / 2]);
        this.add(front);
  
        //For BACK.
        if (_n2 > index) {
          opt = {
            color: 'red',
            useController: true
          };
        } else {
          opt = noOpt;
        }
  
        var back = new CSS3D.Face(size, size, opt);
        back.rotateY(180);
        back.translate([0, 0, -size / 2]);
        this.add(back);
  
        //For LEFT.
        if (index % n === 0) {
          opt = {
            color: 'yellow',
            useController: true
          };
        } else {
          opt = noOpt;
        }
  
        var left = new CSS3D.Face(size, size, opt);
        left.rotateY(-90);
        left.translate([-size / 2, 0, 0]);
        this.add(left);
  
        //For RIGHT.
        if (index % n === (n - 1)) {
          opt = {
            color: 'green',
            useController: true
          };
        } else {
          opt = noOpt;
        }
  
        var right = new CSS3D.Face(size, size, opt);
        right.rotateY(90);
        right.translate([size / 2, 0, 0]);
        this.add(right);
  
        this.el.style.width = this.el.style.height = size + 'px';
        this.el.style.marginTop = this.el.style.marginLeft = -(size / 2) + 'px';
      },
  
      updateStyle: (function() {
        var mat = Matrix4.createMatrix();
  
        return function() {
          Matrix4.multiply(this.pseudoMatrixWorld, this.matrix, mat);
  
          var propName = ('transform' in this.el.style) ? 'transform' : 'webkitTransform';
          this.el.style[propName] = Matrix4.getCameraCSSMatrix(mat);
        };
      }()),
  
      rotateWorldX: function(angle) {
        this.rotateWorld(angle, [1, 0, 0]);
      },
      rotateWorldY: function(angle) {
        this.rotateWorld(angle, [0, 1, 0]);
      },
      rotateWorldZ: function(angle) {
        this.rotateWorld(angle, [0, 0, 1]);
      },
      rotateWorld: function(angle, axis) {
        var rad = angle * DEG_TO_RAD;
        var rotMat = Matrix4.createMatrix();
        var pseudoMatrixWorld = this.pseudoMatrixWorld;
  
        Matrix4.rotate(rotMat, rad, axis, rotMat);
        Matrix4.multiply(rotMat, pseudoMatrixWorld, pseudoMatrixWorld);
  
        this.updateMatrixWorld();
        this.updateStyle();
      },
  
      /** @override */
      updateMatrixWorld: (function() {
        var mat = Matrix4.createMatrix();
  
        return function() {
  
          if (!this.parent) {
            Matrix4.multiply(this.pseudoMatrixWorld, this.matrix, mat);
            Matrix4.copy(mat, this.matrixWorld);
          } else {
            Matrix4.multiply(this.parent.matrixWorld, this.pseudoMatrixWorld, mat);
            Matrix4.multiply(mat, this.matrix, this.matrixWorld);
          }
  
          var children = this.children;
  
          for (var i = 0, l = children.length; i < l; i++) {
            children[i].updateMatrixWorld();
          }
        }
      }())
    });
  
    (win.CSS3D || (win.CSS3D = {})).Cube = Cube;
  
  }(window, window.document, window.CSS3D, window.CSS3D.Matrix4));;
  (function(win, doc, CSS3D) {
  
    var DirectionalLight = CSS3D.Object3D.extend({
      init: function(vector) {
        vector = vector || new CSS3D.Vector3(1, 1, 1);
        this.directorn = vector.normalize();
      },
  
      /**
       * Calucrate light strength.
       * @param {CSS3D.Object3D} object
       */
      calc: function(object) {
        if (!(object instanceof CSS3D.Face)) {
          var children = object.children;
  
          for (var i = 0, l = children.length; i < l; i++) {
            this.calc(children[i]);
          }
        } else {
          if (!object.useController) {
            return;
          }
  
          var normal = object.getNormal();
          var strength = normal.dot(this.directorn);
          if (strength < 0) {
            strength = 0;
          }
          object.setOpacity(strength);
        }
      }
    });
  
    (win.CSS3D || (win.CSS3D = {})).DirectionalLight = DirectionalLight;
  
  }(window, window.document, window.CSS3D));;
  (function(win, doc, CSS3D, Matrix4) {
  
    var isTouch = 'ontouchstart' in window;
    var M_DOWN = (isTouch) ? 'touchstart' : 'mousedown';
    var M_UP = (isTouch) ? 'touchend' : 'mouseup';
    var M_MOVE = (isTouch) ? 'touchmove' : 'mousemove';
  
    function getTemplate(id) {
      var ele = doc.getElementById('template-' + id);
      if (ele) {
        return ele.innerHTML;
      }
      return '';
    }
  
    /**
     * Get current axis direction.
     * @param {CSS3D.Vector3} axis
     * @return {string} current axis direction.
     */
    function getCurAxisDir(axis) {
      if (Math.abs(axis.x) > 0.00001) {
        return 'x';
      } else if (Math.abs(axis.y) > 0.00001) {
        return 'y';
      } else {
        return 'z';
      }
    }
  
    var Face = CSS3D.Object3D.extend({
      className: 'face',
  
      init: function(width, height, opt) {
        this._super();
  
        opt || (opt = {});
  
        this.color = opt.color || '#000';
        this.textureSource = opt.textureSource;
        this.width = width || 50;
        this.height = height || 50;
        this.useController = opt.useController;
  
        var rangeCtrl = doc.createRange();
        var range = doc.createRange();
  
        if (this.useController) {
          rangeCtrl.selectNodeContents(doc.body);
          this.el.appendChild(rangeCtrl.createContextualFragment(getTemplate('face-controller')));
          rangeCtrl.detach();
          rangeCtrl = null;
        }
  
        range.selectNodeContents(doc.body);
        this.el.appendChild(range.createContextualFragment(getTemplate('face')));
        range.detach();
        range = null;
  
        var faceEl = this.faceEl = this.el.querySelector('.faceColor');
  
        this.setEvents();
  
        if (opt.textureSource) {
          this.texture = new Image();
          this.texture.width = width;
          this.texture.height = height;
          this.texture.onload = function() {
            faceEl.appendChild(this);
          };
          this.texture.src = textureSource;
        }
  
        this.el.style.width = width + 'px';
        this.el.style.height = height + 'px';
        this.faceEl.style.backgroundColor = opt.color;
      },
  
      /**
       * Set events to face.
       */
      setEvents: function() {
        [].slice.call(this.el.querySelectorAll('.controller > div')).forEach(function(panel) {
          var that = this;
          panel.addEventListener(M_MOVE, function(e) {
            that.hoverCtrl(this);
          }, false);
        }, this);
      },
  
      /**
       * Hover face.
       */
      hoverOn: function(e) {
  
        if (this.hovering) {
          return;
        }
        this.hovering = true;
  
        this.el.classList.add('on');
        this.parent.el.classList.add('on');
  
        var rubikcube = this.getRubikcube();
        var invRubikcubeMatrix = Matrix4.createMatrix();
        Matrix4.inverse(rubikcube.matrix, invRubikcubeMatrix);
  
        var invPseudoMatrix = Matrix4.createMatrix();
        Matrix4.inverse(this.parent.pseudoMatrixWorld, invPseudoMatrix);
  
        //
        var normal = new CSS3D.Vector3(0, 0, 1);
  
        //
        //
        var mat = Matrix4.createMatrix();
        Matrix4.multiply(invRubikcubeMatrix, this.matrixWorld, mat);
        Matrix4.multiply(invPseudoMatrix, mat, mat);
  
        //
        //
        normal = normal.applyMatrix4withoutW(mat);
        normal.normalize();
  
        normal.x = Math.round(normal.x);
        normal.y = Math.round(normal.y);
        normal.z = Math.round(normal.z);
  
        var base = 5;
        this.translate([base * normal.x, base * normal.y, base * normal.z]);
      },
  
      /**
       * Hover off face.
       */
      hoverOff: function(e) {
  
        if (!this.hovering) {
          return;
        }
        this.hovering = false;
  
        this.el.classList.remove('on');
        this.parent.el.classList.remove('on');
  
        var rubikcube = this.getRubikcube();
        var invRubikcubeMatrix = Matrix4.createMatrix();
        Matrix4.inverse(rubikcube.matrix, invRubikcubeMatrix);
  
        var invPseudoMatrix = Matrix4.createMatrix();
        Matrix4.inverse(this.parent.pseudoMatrixWorld, invPseudoMatrix);
  
        //
        var normal = new CSS3D.Vector3(0, 0, 1);
  
        //
        //
        var mat = Matrix4.createMatrix();
        Matrix4.multiply(invRubikcubeMatrix, this.matrixWorld, mat);
        Matrix4.multiply(invPseudoMatrix, mat, mat);
  
        //
        //
        normal = normal.applyMatrix4withoutW(mat);
        normal.normalize();
  
        normal.x = Math.round(normal.x);
        normal.y = Math.round(normal.y);
        normal.z = Math.round(normal.z);
  
        var base = -5;
        this.translate([base * normal.x, base * normal.y, base * normal.z]);
      },
  
      hoverCtrl: function(ctrl) {
  
        this.el.classList.remove('on');
        this.parent.el.classList.remove('on');
  
        this.hoverOff();
  
        //
        var rubikcube = this.getRubikcube();
        var invRubikcubeMatrix = Matrix4.createMatrix();
        Matrix4.inverse(rubikcube.matrix, invRubikcubeMatrix);
  
        //
        var cur_axis = {
          x: new CSS3D.Vector3(1, 0, 0),
          y: new CSS3D.Vector3(0, 1, 0),
          z: new CSS3D.Vector3(0, 0, 1)
        };
  
        //
        //
        var matrixWorld = this.matrixWorld;
        var mat = Matrix4.createMatrix();
        Matrix4.multiply(invRubikcubeMatrix, matrixWorld, mat);
  
        //
        //
        cur_axis.x = cur_axis.x.applyMatrix4withoutW(mat);
        cur_axis.y = cur_axis.y.applyMatrix4withoutW(mat);
        cur_axis.z = cur_axis.z.applyMatrix4withoutW(mat);
  
        var cur_target;
        var tmp_dir = 1;
        switch (ctrl.dataset.dir) {
          case 'up':
            cur_target = 'y';
            tmp_dir = 1;
            break;
          case 'down':
            cur_target = 'y';
            tmp_dir = -1;
            break;
          case 'left':
            cur_target = 'x';
            tmp_dir = 1;
            break;
          case 'right':
            cur_target = 'x';
            tmp_dir = -1;
            break;
        }
  
        //Face
        var noAxis = [];
        noAxis.push(getCurAxisDir(cur_axis.z));
  
        //
        noAxis.push(getCurAxisDir(cur_axis[cur_target]));
  
        //
        var axis = ['x', 'y', 'z'];
        noAxis.forEach(function(type) {
          var index;
          if ((index = axis.indexOf(type)) !== -1) {
            axis.splice(index, 1);
          }
        });
  
        //
        var res = {};
        res.target = axis[0];
  
        //
        //
        var dir_axis = getCurAxisDir(cur_axis[cur_target]);
        tmp_dir *= cur_axis[cur_target][dir_axis] > 0 ? 1 : -1;
  
        //
        //
        var norm_dir_axis = getCurAxisDir(cur_axis.z);
  
        if (dir_axis === 'z') {
          tmp_dir *= cur_axis.z[norm_dir_axis] < 0 ? 1 : -1;
        } else if (dir_axis === 'y') {
          if (norm_dir_axis === 'x') {
            tmp_dir *= cur_axis.z[norm_dir_axis] < 0 ? 1 : -1;
          } else if (norm_dir_axis === 'z') {
            tmp_dir *= cur_axis.z[norm_dir_axis] > 0 ? 1 : -1;
          }
        } else if (dir_axis === 'x') {
          tmp_dir *= cur_axis.z[norm_dir_axis] > 0 ? 1 : -1;
        }
  
        res.dir = tmp_dir > 0 ? CSS3D.RubikCube.RotationDirection.FORWARD : CSS3D.RubikCube.RotationDirection.BACKWARD;
        rubikcube.rotateCubes(res.target, res.dir);
      },
  
      /**
       * Set opacity.
       * set opacity as alpha. max alpha is 0.8 + 0.3.
       * 0.3 is ambent light as opacity.
       *
       * @param {number} alpha 0.0 ~ 1.0
       */
      setOpacity: function(alpha) {
        this.faceEl.style.opacity = 0.8 * alpha + 0.3;
      },
  
      getRubikcube: function() {
        return this.parent.parent;
      },
  
      getPosition: function() {
        var mat = Matrix4.createMatrix();
        this.m.multiply(this.matrixWorld, this.matrix, mat);
        return this.position.clone().applyMatrix4(mat);
      },
  
      getNormal: (function() {
  
        var rubikcube = null,
  
          //
          normal = new CSS3D.Vector3(0, 0, 1),
          invRubikcubeMatrix = Matrix4.createMatrix(),
          resultMatrix = Matrix4.createMatrix();
  
        return function() {
          if (!rubikcube) {
            rubikcube = this.getRubikcube();
          }
          Matrix4.inverse(rubikcube.matrix, invRubikcubeMatrix);
  
          //
          //
          Matrix4.multiply(invRubikcubeMatrix, this.matrixWorld, resultMatrix);
  
          //
          //
          var _normal = normal.applyMatrix4withoutW(resultMatrix);
          _normal.normalize();
  
          return _normal;
        };
      }())
    });
  
    (win.CSS3D || (win.CSS3D = {})).Face = Face;
  
  }(window, window.document, window.CSS3D, window.CSS3D.Matrix4));;
  (function(win, doc, CSS3D) {
  
    var Line = CSS3D.Object3D.extend({
      className: 'line',
  
      init: function(length, color) {
        this._super();
        this.length = length || 10;
        this.color = color || '#fff';
        this.el.style.width = length + 'px';
        this.el.style.borderTopColor = this.color;
      }
    });
  
    (win.CSS3D || (win.CSS3D = {})).Line = Line;
  
  }(window, window.document, window.CSS3D));;
  (function(win, doc, CSS3D, Matrix4) {
  
    var isTouch = 'ontouchstart' in window;
    var M_DOWN = (isTouch) ? 'touchstart' : 'mousedown';
    var M_UP = (isTouch) ? 'touchend' : 'mouseup';
    var M_MOVE = (isTouch) ? 'touchmove' : 'mousemove';
  
    //Import
    var cos = Math.cos;
    var abs = Math.abs;
  
    var RubikCube = CSS3D.Object3D.extend({
      className: 'rubikcube',
  
      handleEvent: function(e) {
        switch (e.type) {
          case M_DOWN:
            this._onMouseDown(e);
            break;
  
          case M_UP:
            this._onMouseUp(e);
            break;
  
          case M_MOVE:
            this._onMouseMove(e);
            break;
        }
      },
  
      init: function(size, num, margin) {
  
        this._super();
        this.cubes = [];
        this.history = new CSS3D.History();
  
        //Create a directional light.
        this.light = new CSS3D.DirectionalLight(new CSS3D.Vector3(1, -1, 1));
  
        size = size || 50;
        num = num || 3;
        margin = (margin === 0 || margin) ? margin : 3;
  
        var index = 0,
          cube = null;
  
        for (var i = 0; i < num; i++) {
          for (var j = 0; j < num; j++) {
            for (var k = 0; k < num; k++) {
              cube = new CSS3D.Cube(size, num, index);
              cube.cubeId = index;
              cube.translate([
                k * size - (size - (margin * (k - 1))),
                j * size - (size - (margin * (j - 1))),
                i * size - (size - (margin * (i - 1)))
              ]);
              this.cubes.push(cube);
              this.add(cube);
              index++;
            }
          }
        }
  
        this.setEvents();
        this.updateMatrix();
        this.updateLight();
      },
  
      /**
       * Set events to the document.
       */
      //TODO
      setEvents: function() {
        this.el.addEventListener(M_DOWN, this, false);
        doc.addEventListener(M_UP, this, false);
        doc.addEventListener(M_MOVE, this, false);
  
        var that = this;
        var xdeg = -50;
        var ydeg = 40;
        var prevZ = 0;
        var baseZ = 10;
        var prevX = 0;
        var prevY = 0;
        var handler = {
          dragging: false,
          handleEvent: function(e) {
            switch (e.type) {
              case 'gesturestart':
                prevZ = 1;
                e.preventDefault();
                break;
  
              case 'gesturechange':
                var num = e.scale;
                that.translate([0, 0, (num - prevZ) * 400]);
                prevZ = num;
                e.preventDefault();
                break;
  
              case 'mousewheel':
                that.translate([0, 0, e.wheelDelta / 5]);
                e.preventDefault();
                break;
  
              case M_DOWN:
                if (that.dragging) {
                  return;
                }
                this.dragging = true;
                prevX = e.pageX;
                prevY = e.pageY;
                break;
  
              case M_MOVE:
                if (!this.dragging) {
                  return false;
                }
  
                if (e.touches && e.touches.length > 1) {
                  this.dragging = false;
                  return;
                }
  
                var x = prevX - e.pageX;
                var y = prevY - e.pageY;
                prevX = e.pageX;
                prevY = e.pageY;
  
                that.rotateY(-x);
                that.rotateX(y);
                break;
  
              case M_UP:
                this.dragging = false;
                break;
            }
  
            e.preventDefault();
            return false;
          }
        };
  
        //Rotation.
        doc.addEventListener(M_DOWN, handler, false);
        doc.addEventListener(M_UP, handler, false);
        doc.addEventListener(M_MOVE, handler, false);
        doc.addEventListener('mousewheel', handler, false);
        doc.addEventListener('gesturechange', handler, false);
        doc.addEventListener('gesturestart', handler, false);
      },
  
      /**
       * Update light strength.
       * if this method will be invoked with an argument, it calculates only `cubes`.
       * @param {Array.<CSS3D.Cube>} cubes.
       */
      updateLight: function(cubes) {
        var light = this.light;
        cubes = cubes || this.cubes;
  
        for (var i = 0, l = cubes.length; i < l; i++) {
          light.calc(cubes[i]);
        }
      },
  
      rotateFace: function(type, direction, noAnimate) {
  
        if (this.moving) {
          return false;
        }
  
        this.moving = true;
  
        var that = this;
        var cubes = this.cubes.slice(0);
        var firstLetter = type.charAt(0).toUpperCase();
        var methodName = 'get' + firstLetter + (type.slice(1)) + 'Face';
        var faceArr = this[methodName]();
        var rotateMap = {
          'back': 'rotateWorldZ',
          'front': 'rotateWorldZ',
          'top': 'rotateWorldY',
          'bottom': 'rotateWorldY',
          'left': 'rotateWorldX',
          'right': 'rotateWorldX',
          'middle1': 'rotateWorldZ',
          'middle2': 'rotateWorldX',
          'middle3': 'rotateWorldY'
        }
  
        var rotateDir = rotateMap[type];
  
        if (!rotateDir) {
          return false;
        }
  
        //Add a history.
        this.history.add({
          type: type,
          direction: direction
        });
  
        //TODO
        if (/y/i.test(rotateDir)) {
          direction *= RubikCube.RotationDirection.BACKWARD;
        }
  
        var angle = direction === RubikCube.RotationDirection.FORWARD ? 90 : -90;
        var sub = direction === RubikCube.RotationDirection.BACKWARD ? 3 : -3;
  
        function leap(a, b, x) {
          var f = (1.0 - cos(x * 3.1415927)) * 0.5;
          return a * (1.0 - f) + b * f;
        }
  
        var prev = 0;
        var x = 0.0;
        var cnt = 0;
  
        if (noAnimate) {
          for (var i = 0, l = faceArr.length; i < l; i++) {
            cubes[faceArr[i]][rotateDir](angle);
          }
          this.updateLight(cubes);
          this.moving = false;
        } else {
          (function loop() {
  
            if (x <= 1) {
              var val = leap(0, angle, x);
              var next = val - prev;
              prev = val;
              x += 0.06;
              for (var i = 0, l = faceArr.length; i < l; i++) {
                cubes[faceArr[i]][rotateDir](next);
                if (cnt++ % 2 === 0) {
                  that.updateLight(cubes);
                }
              }
            } else {
              if (abs(prev) < abs(angle)) {
                for (var i = 0, l = faceArr.length; i < l; i++) {
                  cubes[faceArr[i]][rotateDir](angle - prev);
                }
              }
  
              that.moving = false;
  
              return;
            }
  
            setTimeout(loop, 16);
          }());
        }
  
        //replace cubes.
        var b0 = this.cubes[faceArr[0]];
        var b1 = this.cubes[faceArr[1]];
        var b2 = this.cubes[faceArr[2]];
        var b3 = this.cubes[faceArr[3]];
        var b4 = this.cubes[faceArr[4]];
        var b5 = this.cubes[faceArr[5]];
        var b6 = this.cubes[faceArr[6]];
        var b7 = this.cubes[faceArr[7]];
        var b8 = this.cubes[faceArr[8]];
  
        if (direction === RubikCube.RotationDirection.FORWARD) {
          this.cubes[faceArr[0]] = b2;
          this.cubes[faceArr[1]] = b5;
          this.cubes[faceArr[2]] = b8;
          this.cubes[faceArr[3]] = b1;
          this.cubes[faceArr[4]] = b4;
          this.cubes[faceArr[5]] = b7;
          this.cubes[faceArr[6]] = b0;
          this.cubes[faceArr[7]] = b3;
          this.cubes[faceArr[8]] = b6;
        } else {
          this.cubes[faceArr[0]] = b6;
          this.cubes[faceArr[1]] = b3;
          this.cubes[faceArr[2]] = b0;
          this.cubes[faceArr[3]] = b7;
          this.cubes[faceArr[4]] = b4;
          this.cubes[faceArr[5]] = b1;
          this.cubes[faceArr[6]] = b8;
          this.cubes[faceArr[7]] = b5;
          this.cubes[faceArr[8]] = b2;
        }
  
        //check correct order.
        if (this.checkCorrect()) {
          this.trigger('correct');
        }
      },
  
      getRightFace: function() {
        return [2, 11, 20, 5, 14, 23, 8, 17, 26];
      },
      getLeftFace: function() {
        return [0, 9, 18, 3, 12, 21, 6, 15, 24];
      },
      getBottomFace: function() {
        return [6, 7, 8, 15, 16, 17, 24, 25, 26];
      },
      getTopFace: function() {
        return [0, 1, 2, 9, 10, 11, 18, 19, 20];
      },
      getMiddle1Face: function() {
        return [11, 10, 9, 14, 13, 12, 17, 16, 15];
      },
      getMiddle2Face: function() {
        return [1, 10, 19, 4, 13, 22, 7, 16, 25];
      },
      getMiddle3Face: function() {
        return [3, 4, 5, 12, 13, 14, 21, 22, 23];
      },
      getFrontFace: function() {
        return [20, 19, 18, 23, 22, 21, 26, 25, 24];
      },
      getBackFace: function() {
        return [2, 1, 0, 5, 4, 3, 8, 7, 6];
      },
  
      rotateCubes: function(target, dir) {
        var type = this._selectRotateDir(this._faceType, target);
        type = type.replace('get', '').replace('Face', '');
        var a = type.charAt(0).toLowerCase();
        type = a + type.slice(1);
        this.rotateFace(type, dir);
      },
  
      random: function(count) {
        count = count || 10;
  
        var rotateMap = ['top', 'bottom', 'front', 'back', 'left', 'right', 'middle1', 'middle2', 'middle3'],
          rand, method;
  
        for (var i = 0; i < count; i++) {
          rand = ~~(Math.random() * rotateMap.length);
          method = rotateMap[rand];
          this.rotateFace(method, RubikCube.RotationDirection.FORWARD, true);
        }
      },
  
      /* ----------------------------------------------------------------
          PRIVATE METHODS.
      ------------------------------------------------------------------- */
      _onMouseDown: function(e) {
  
        if (e.touches && e.touches.length > 1) {
          this.dragging = false;
          return;
        }
  
        var obj3d = this._getCSS3Object(e.target);
  
        if (obj3d) {
          obj3d.hoverOn(e);
        }
  
        this.dragging = true;
        this._selectedCubeIndex = this.cubes.indexOf(obj3d.parent);
        this._faceType = this._getBelongTo(this._selectedCubeIndex);
        this.prevX = e.pageX;
        this.prevY = e.pageY;
  
        e.preventDefault();
      },
      _onMouseUp: function(e) {
        var obj3d = this._getCSS3Object(e.target);
  
        if (obj3d) {
          obj3d.hoverOff(e);
        }
  
        this.dragging = false;
        this._selectedCubeIndex = null;
        this._faceType = null;
      },
      _onMouseMove: function(e) {
        var obj3d = this._getCSS3Object(e.target);
  
        if (e.touches && e.touches.length > 1) {
          this.dragging = false;
          if (obj3d) {
            obj3d.hoverOff(e);
          }
          return;
        }
  
        var pageX = isTouch ? e.touches[0].pageX : e.pageX;
        var pageY = isTouch ? e.touches[0].pageY : e.pageY;
  
        var target = doc.elementFromPoint(pageX, pageY);
        if (/left|right|up|down/.test(target.className)) {
          var css3obj = this._getCSS3Object(target);
          css3obj.hoverCtrl(target);
        }
      },
  
      _selectRotateDir: function(types, target) {
        var ret;
        var rotateMap = {
          'getBackFace': 'z',
          'getFrontFace': 'z',
          'getTopFace': 'y',
          'getBottomFace': 'y',
          'getLeftFace': 'x',
          'getRightFace': 'x',
          'getMiddle1Face': 'z',
          'getMiddle2Face': 'x',
          'getMiddle3Face': 'y'
        };
  
        types.some(function(type) {
          if (rotateMap[type] === target) {
            ret = type;
            return true;
          }
        });
  
        return ret;
      },
  
      _getBelongTo: function(index) {
        var faceMethodNames = ['getRightFace', 'getLeftFace', 'getBottomFace', 'getTopFace', 'getMiddle1Face', 'getMiddle2Face', 'getMiddle3Face', 'getFrontFace', 'getBackFace'];
        var ret = [];
  
        for (var i = 0, l = faceMethodNames.length; i < l; i++) {
          var arr = this[faceMethodNames[i]]();
          if (arr.indexOf(index) !== -1) {
            ret.push(faceMethodNames[i]);
          }
        }
  
        return ret;
      },
  
      _getCSS3Object: function(node) {
        if (!node.CSS3DObject) {
          if (!node.parentNode) {
            return null;
          }
          return this._getCSS3Object(node.parentNode);
        }
  
        return node.CSS3DObject;
      },
  
      /**
       * Check correct order in cubes array.
       */
      checkCorrect: function() {
        var cubes = this.cubes;
  
        for (var i = 0, l = cubes.length; i < l; i++) {
          if (cubes[i].cubeId !== i) {
            return false;
          }
        }
  
        return true;
      }
    });
  
    RubikCube.RotationDirection = {
      FORWARD: 1,
      BACKWARD: -1
    };
  
    (win.CSS3D || (win.CSS3D = {})).RubikCube = RubikCube;
  
  }(window, window.document, window.CSS3D, window.CSS3D.Matrix4));;
  (function(win, doc, Class, exports) {
  
    'use strict';
  
    var Timer = Class.extend({
      init: function() {
        this.el = doc.createElement('div');
        this.el.className = 'timer';
        this.time = 0;
      },
      start: function() {
  
        var that = this;
        var prevTime = Date.now();
        var el = this.el;
  
        (function loop() {
          var now = Date.now();
          var cur = now - prevTime;
          prevTime = now;
          that.time += cur;
          el.innerHTML = that.parse(that.time);
          that.timer = setTimeout(loop, 32);
        }());
      },
      stop: function() {
        clearTimeout(this.timer);
      },
      parse: function(ms) {
        var m = '' + ~~(ms / (60 * 1000));
        ms %= (60 * 1000);
        var s = '' + ~~(ms / 1000);
        ms %= 1000;
  
        m = (m = '0' + m).slice(-2);
        s = (s = '0' + s).slice(-2);
        ms = (ms = '00' + ms).slice(-3);
  
        var ret = m + ':' + s + ':' + ms;
  
        return ret;
      }
    });
  
    exports.Timer = Timer;
  
  }(window, window.document, window.Class, window));;
  (function(win, doc, Matrix4, Class, CSS3D) {
    var isTouch = 'ontouchstart' in window;
    var M_DOWN = (isTouch) ? 'touchstart' : 'mousedown';
    var M_UP = (isTouch) ? 'touchend' : 'mouseup';
    var M_MOVE = (isTouch) ? 'touchmove' : 'mousemove';
  
    function $(selector) {
      return doc.querySelector(selector);
    }
  
    function $$(selector) {
      return doc.querySelectorAll(selector);
    }
  
    function getTemplate(id) {
      var ele = doc.getElementById('template-' + id);
      if (ele) {
        return ele.innerHTML;
      }
      return '';
    }
  
    (function() {
  
      /*[].slice.call($$('#ctrl p')).forEach(function (btn) {
          btn.addEventListener(M_DOWN, function (e) {
              rubikcube.rotateFace(e.target.id, CSS3D.RubikCube.RotationDirection.FORWARD);
          }, false);
      });*/
  
      var query = location.search.slice(1);
  
      var rubikcube = null;
      if (/demo2/i.test(query)) {
        rubikcube = new CSS3D.RubikCube(80, 3, 400);
        rubikcube.translate([0, 40, -3200]);
      } else {
        rubikcube = new CSS3D.RubikCube(80, 3);
        rubikcube.translate([0, 40, -500]);
      }
      rubikcube.rotateX(-50);
      rubikcube.rotateY(40);
      rubikcube.random(20);
  
      var lineSize = 500;
  
      //As x axis.
      //        var redline = new CSS3D.Line(lineSize, 'red');
      //        redline.translate([-lineSize / 2, 0, 0]);
  
      //As y axis.
      //        var greenline = new CSS3D.Line(lineSize, 'green');
      //        greenline.rotateZ(90);
      //        greenline.translate([-lineSize / 2, 0, 0]);
  
      //As z axis.
      //        var blueline = new CSS3D.Line(lineSize, 'blue');
      //        blueline.rotateY(90);
      //        blueline.translate([-lineSize / 2, 0, 0]);
  
      //        rubikcube.add(redline);
      //        rubikcube.add(blueline);
      //        rubikcube.add(greenline);
  
      doc.querySelector('#stage').appendChild(rubikcube.el);
  
      win.rubikcube = rubikcube;
  
      var cnt = 0;
      var rotateMap = ['top', 'bottom', 'front', 'back', 'left', 'right', 'middle1', 'middle2', 'middle3'];
  
      function demoStart() {
        (function loop() {
          cnt = (cnt + 1) % 80;
  
          if (cnt === 0) {
            var rand = ~~(Math.random() * rotateMap.length);
            var method = rotateMap[rand];
            rubikcube.rotateFace(method, CSS3D.RubikCube.RotationDirection.FORWARD);
          }
  
          rubikcube.rotateY(0.1);
          rubikcube.rotateX(-0.3);
  
          setTimeout(loop, 16);
        }());
      }
  
      if (/autodemo/i.test(query)) {
        demoStart();
      }
  
      //doc.querySelector('#demo1 > input').addEventListener(M_DOWN, demoStart, false);
  
      0 && doc.querySelector('#demo2 > input').addEventListener(M_DOWN, function() {
        location.href = 'http://' + location.host + location.pathname + '?demo1';
      }, false);
  
      0 && doc.querySelector('#demo3 > input').addEventListener(M_DOWN, function() {
        location.href = 'http://' + location.host + location.pathname + '?demo2';
      }, false);
  
      0 && doc.querySelector('#clear > input').addEventListener(M_DOWN, function(e) {
        var len = rubikcube.history.length();
        (function loop() {
          len--;
          var history = rubikcube.history.getAt(len);
          rubikcube.rotateFace(history.type, -history.direction);
  
          if (!len) {
            return;
          }
  
          setTimeout(loop, 1000);
        }());
      }, false);
  
      var timer = new Timer();
      doc.body.appendChild(timer.el);
      timer.start();
  
      rubikcube.on('correct', function(e) {
        rubikcube.history = [];
        timer.stop();
      }, false);
    }());
  
  }(window, window.document, window.Matrix4, window.Class, window.CSS3D));
