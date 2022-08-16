const isNode = typeof window === 'undefined',
  method = [isNode ? 'once' : 'addEventListener'];

function once(target, event) {
  let listener;
  const p = new Promise((res) => {
    target[method](event, (listener = res), isNode ? undefined : { once: true });
  });

  p.off = () => target[method](event, listener);

  return p;
}

module.exports = once;
module.exports.default = once;
