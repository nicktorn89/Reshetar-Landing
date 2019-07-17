<h1 align="center">
  Reshetar Landing
</h1>

[![Build Status](https://travis-ci.com/nicktorn89/Reshetar-Landing.svg?branch=master)](https://travis-ci.com/nicktorn89/Reshetar-Landing)

## Установка и старт

1.  **Установка** <br/>
  `npm i`
2. 🚀 **Старт** <br/>
  `npm run develop`
  
 ## Фотографии

Все фотографии, кроме логотипа, svg-изображений и фото в блоке описания, хранятся в трех папках - webp, low, high. В папках low и high хранятся фото в формате jpeg и соответствуют качеству. Все они именуются одинаково и являются одними и теми же экземплярами в разном качестве. В webp хранятся также те же экземпляры. Изображения webp используются для максимальной производительности в новых браузерах.

| Директория    | Блок на сайте  |
| ------------- | :-------------:|
| accessories   | SliderWithTabs | 
| hairstyle     | SliderWithTabs |
| makeup        | SliderWithTabs |
| review        | RateSlider     |
| works         | SliderBlock    |
| certificates  | SliderBlock    |

Логотип, фото в блоке описания и svg-изображения загружаются на сайт с помощью Gatsby Static Query и отображаются в Gatsby Image. Для правильного отображения должны иметь следующие наименования 

**Примечание:** *svg-изображения должны быть переименованы в коде, так как имеют специфичные названия*

| Тип изображения          | Наименование          |
| ------------------------ | :--------------------:|
| Логотип                  | logo.png              | 
| Изображение в описании   | description-photo.png |
