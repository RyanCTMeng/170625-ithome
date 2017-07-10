# cucumberjs-sandbox

## First cucumber feature

### step by step

**init project**

```
npm init -y
npm i cucumberjs chai -S
```

**create features folder**

`mkdir features`

**create first feature**

`vi features/bmi.feature`

**execute**

`cucumberjs`

or

`npm test`

**create first feature step**

`vi features/bmiStep.js`

## generate html report

### step by step

**install cucumber-html-report module**

`npm i cucumber-html-reporter -D`

**setting up cucumber-html-report config**

`vi reporter.js`

**generate json report file**

`cucumberjs -f json:cucumber_report.json`

or

`npm run report:createJson`

**convert json to html report**

`node reporter`

or

`npm run report:createHtml`

**quickly start**

`npm run report`

### reference

* [cucumber-html-report](https://www.npmjs.com/package/cucumber-html-report)

## coverage

**install istanbul module**

`npm i istanbul -D`

**execute**

`istanbul cover cucumberjs`

or

`npm run coverage`
