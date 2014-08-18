
var filters = {

};

var helpers = {
    color: function(chunk, ctx, bodies, params) {
        var color = ctx.get('color');
        var type = params.type || 'hex';
        return chunk.write(css.color(color, type));
    },
    objCColor: function(chunk, ctx, bodies, params) {
      var color = ctx.get('color');
      var f = function(n) { return n < 0.001 ? 0 : (n/255).toFixed(3); };
      return chunk.write('TODO');
      // return chunk.write('colorWithRed:'+f(color.r)+' green:'+f(color.g)+' blue:'+f(color.b)+' alpha:' + color.a);
    },
    objCAlignment: function(chunk, ctx, bodies, params) {
      var align = ctx.get('textAlign');
      var code = '';
      switch (align) {
        case 'left':
          code = 'NSTextAlignmentLeft';
          break;
        case 'right':
          code = 'NSTextAlignmentRight';
          break;
        case 'center':
          code = 'NSTextAlignmentCenter';
          break;
        case 'justified':
          code = 'NSTextAlignmentJustified';
          break;
      }
      return chunk.write(code);
    },
    objCFont: function(chunk, ctx, bodies, params) {
      var baseTextStyle = ctx.get('baseTextStyle');
      return chunk.write(baseTextStyle.font.name);
    }
};

exports.filters = filters;
exports.helpers = helpers;
