## Screenshot from DOM/Page

Take a screenshot of the element DOM

## Install
Using npm:

```
npm i @ghoul007/screenshot
@ghoul007/screenshot --url yourURL --elem SELECTOR

```
## Available methods
Take a screenshot

You can pass a list of options to this method 
- `url`: (required) the url to screnshot
- `elem`: (optional) the element DOM (CSS selector)

## Example

Take a screenshot
```
@ghoul007/screenshot --url "https://www.google.com" --elem "#lga"
```


## publish in NPM
```

npm login
npm publish --scope=username --access public

```