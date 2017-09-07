let styles = [
`
/* 利用flex布局居中 */
#center1{
    display: flex;
    justify-content: center;
    align-items: center;
}
`,
`
/* 利用绝对定位进行居中展示 */
#center2{
  position: relative;
  .item{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
}
`,
`
/* 利用translate进行x,y的位移变换 */
#center3{
  position: relative;
  .item{
    position: absolute;
    top: 50%;
    left: 50%;
    transform:translate(-50%,-50%);
  }
}
`,
`
/* 利用外边距进行x,y的位移变换 */
#center4{
  position: relative;
  .item{
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -25px;
    margin-left: -25px;
  }
}
`
]

export default styles
