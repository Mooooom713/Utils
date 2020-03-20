# 私家工具库

## Tips: 纯肉写，可能存在不足，发现后修正

## Summary

### formatDate 时间格式化工具

- 目前只支持时间戳和时间对象
- 使用方式：
  - 参数： (time, format) => {}
  - time : 时间戳或者时间对象
  - format : 格式

    | 替换对象 | 含义 |
    | ---- | ---- |
    |  YYYY  |  年 |
    | MM | 月 |
    | DD | 日 |
    | hh | 小时 |
    | mm | 分钟 |
    | ss | 秒数 |
    | w | 星期 |

- 关于 `format` 的用法
  - 年月日： 'YYYY-MM-DD'、'YYYY/MM/DD' 分隔符可以自定义
  - 年月日时分秒： 'YYYY-MM-DD hh:mm:ss'、'YYYY/MM/DD hh:mm:ss' 分隔符可以自定义
  - 年月日时分秒 + 星期： 'YYYY-MM-DD hh:mm:ss 星期w'、'YYYY/MM/DD hh:mm:ss 星期w' 分隔符可以自定义
  - 月日： 'MM-DD'、'MM/DD'
  - 以此类推...

---
