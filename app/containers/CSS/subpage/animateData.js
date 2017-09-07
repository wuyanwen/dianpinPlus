let styles = [
`
/* 位移 */
#animate1{
  position: relative;
  .item{
    background-color: #dfdfdf;
    position: absolute;
    animation:whoole 5s linear 0s infinite;
  }
  @keyframes whoole{
    0% {
      left:0;
      top:0;
      background-color: #dfdfdf;
    }
    25%{
      left:100%;
      top:0;
      transform:translate(-100%,0);
      background-color: #e9203d;
    }
    50%{
      left: 100%;
      top:100%;
      transform:translate(-100%,-100%);
      background-color: #a1c2df;
    }
    75%{
      left: 0;
      top:100%;
      transform:translate(0,-100%);
      background-color: #de34a1;
    }
    100%{
      top:0;
      left: 0;
      background-color: #dfdfdf;
    }
  }
}
`,
`
/* 旋转 */
#animate2{
  position: relative;
  .animate-title{
    width: 150px;
    height: 150px;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: #fff;
    border-radius: 50%;
    animation: spin 5s linear 0s infinite;
    border: 1px solid #ccc;
  }
  .item{
    position: absolute;
    border-radius: 50%;   
    background-color: #aeaedd;
  }
  .item1{
    left: 0px;
    top: 50px;
  }
  .item2{
    left: -50px;
    top: 50px;
  }
  .item-line{
    height: 5px;
    background-color: rgba(113, 14, 14, 0.15);
    left: -30%;
    position: absolute;
    top: 50%;
    width: 80%;
  }
  @keyframes spin {
    from{
      transform:rotate(0deg);
    }
    to{
      transform:rotate(360deg);
    }
  }
}
`,
`

`,
`

`
]

export default styles
