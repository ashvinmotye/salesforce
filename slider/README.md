# Slider

## Overview
Lightning Web Component to be used in Experience Sites.\
Component displays a full screen image as background, a title and subtitle, with clickable pagination dots and navigation arrows.

## Demo
A live version accessible at:
1. [Experience Cloud Site](https://ashvinmotye-dev-ed.develop.my.site.com/slider/s/)
1. [Codepen](https://codepen.io/ashvinmotye/full/dywaQKq)

## Structure
```
└── lwc
    ├── data.js
    ├── slider.css
    ├── slider.html
    ├── slider.js
    └── slider.js-meta.xml
```

## How to
In the `data.js` file, change the content of the array of objects, adding id, title, description and url to the image of the slide.
```
export const data = [
    {
        id: "slide1",
        title: "Inspiration",
        description: "The only way to do great work is to love what you do",
        image: "https://images.unsplash.com/photo-1644843521798-13d5c423fa4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
    },
    {
        id: "slide2",
        title: "Wisdom",
        description: "In the middle of every difficulty lies opportunity",
        image: "https://images.unsplash.com/photo-1644843521796-33876c641aeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
    },
    {
        id: "slide3",
        title: "Persistence",
        description: "Success is stumbling from failure to failure with no loss of enthusiasm",
        image: "https://images.unsplash.com/photo-1644843521794-236e70acce08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
    }
]
```