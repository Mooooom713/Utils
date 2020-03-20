export const formatDate = (time, format) => {
  let t;
  if (typeof time === 'number') {
    t = new Date(time);
  } else if (time instanceof Date) {
    t = time;
  } else {
    console.log('参数类型错误，请输入时间类型或时间戳！');
    return;
  }
  const week = t.getDay();
  let str = t.toJSON();
  const year = str.slice(0, 4);
  const month = str.slice(5, 7);
  const day = str.slice(8, 10);
  const hour = str.slice(11, 13);
  const minute = str.slice(14, 16);
  const second = str.slice(17, 19);
  const weeks = ['日', '一', '二', '三', '四', '五', '六'];
  return format
    .replace('YYYY', year)
    .replace('MM', month)
    .replace('DD', day)
    .replace('hh', hour)
    .replace('mm', minute)
    .replace('ss', second)
    .replace('w', weeks[week]);
};
