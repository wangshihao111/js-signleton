# vars-singleton

Make variables to be singleton.

## USAGE

If your project has only one pack of this package, you can use the follow method:

```ts
import { createSingleton } from "vars-singleton";

const singletonVar = createSingletonValue("key/of/the/value", someValue);
```

If you want use global pattern, you can use the follow method:

```ts
import { createGlobalSingleton } from "vars-singleton";

const singletonVar = createGlobalSingletonValue("key/of/the/value", someValue);
```

Don't worry of multiple pack of this package, all values assigned in a global var named as `__jsSingleton__`
