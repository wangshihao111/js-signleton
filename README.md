# vars-singleton

Make variables to be singleton.

此模块可用来解决使用 webpack.container.ModuleFederationPlugin 时出现的单例引用问题。

## USAGE

- 你可以使用如下方法创建一个单例变量：

> 如果你的 node_modules 下有多个实例的 vars-singleton，可能造成单例失效，此时可以使用全局模式

```ts
import { createSingleton } from 'vars-singleton';

const singletonVar = createSingleton('key/of/the/value', someValue);
```

- 如果你想使用全局模式，则可使用如下方法：该方法会将所有单例变量挂载到全局对象上，因此及时存在多版本，也不影响使用

```ts
import { createGlobalSingleton } from 'vars-singleton';

const singletonVar = createGlobalSingleton('key/of/the/value', someValue);
```

全局模式下，所有变量会被挂载到`__jsSingleton__`变量上。

- 如果你想复写单例变量，你可以使用 `overrideGlobalSingleton`或`overrideSingleton`
