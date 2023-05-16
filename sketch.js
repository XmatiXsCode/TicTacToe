class plot
{
  constructor(x, y, dim)
  {
    this.x = x;
    this.y = y;
    this.dim = dim;
    
    this.value = "";
  }
  show()
  {
    fill("white");
    square(this.x, this.y, this.dim);
    if(this.value!=="")
    {
      fill("black");
      textAlign(CENTER);
      textSize(this.dim*0.8);
      text(this.value, this.x+this.dim/2, this.y+this.dim/1.3);
    }
  }
}

let plots = [], first = Math.floor(Math.random()*3), txt = 0;

function setup()
{
  createCanvas(400, 400);
  let i, a = 0, x = 50, y = 30, dim = 100;
  for(i=9;i>0;i--)
  {
    plots.push(new plot(x, y, dim));
    x = x + dim;
    a++;
    if(a==3)
    {
      x = 50;
      y = y + dim;
      a = 0;
    }
  }
}

function draw()
{
  background(220);
  for(let p of plots)
  {
    p.show();
  }
  fill("black");
  textAlign(CENTER);
  textSize(40);
  if(txt==0)
  {
    if(first%2==0)
    {
      text("> O <", 100, 380);
      text("X", 300, 380);
    }
    else
    {
      text("> X <", 300, 380);
      text("O", 100, 380);
    }
  }
  else if(txt==1)
  {
    text("Wygrana: O!", 200, 370);
    textSize(20);
    text("Kliknij poza planszę gry, aby zresetować...", 200, 395);
  }
  else if(txt==2)
  {
    text("Wygrana: X!", 200, 370);
    textSize(20);
    text("Kliknij poza planszę gry, aby zresetować...", 200, 395);
  }
  else
  {
    text("Remis!", 200, 370);
    textSize(20);
    text("Kliknij poza planszę gry, aby zresetować...", 200, 395);
  }
}

function mouseClicked()
{
  if(mouseY<30 || mouseY>330 || mouseX<50 || mouseX>350)
  {
    if(txt==1 || txt==2 || txt==3)
    {
      plots = [];
      first = Math.floor(Math.random()*3);
      txt = 0;
      setup();
    }
  }
  for(let p of plots)
  {
    if(mouseX>p.x && mouseX<p.x+p.dim && mouseY>p.y && mouseY<p.y+p.dim)
    {
      if(p.value=="" && first>=0)
      {
        if(first%2==0)
        {
          p.value = "O";
        }
        else
        {
          p.value = "X";
        }
        first++;
      }
    }
  }
  if(plots[0].value=="X" && plots[1].value=="X" && plots[2].value=="X")
  {
    first = -1;
    txt = 2;
  }
  else if(plots[0].value=="O" && plots[1].value=="O" && plots[2].value=="O")
  {
    first = -1;
    txt = 1;
  }
  else if(plots[3].value=="X" && plots[4].value=="X" && plots[5].value=="X")
  {
    first = -1;
    txt = 2;
  }
  else if(plots[3].value=="O" && plots[4].value=="O" && plots[5].value=="O")
  {
    first = -1;
    txt = 1;
  }
  else if(plots[6].value=="X" && plots[7].value=="X" && plots[8].value=="X")
  {
    first = -1;
    txt = 2;
  }
  else if(plots[6].value=="O" && plots[7].value=="O" && plots[8].value=="O")
  {
    first = -1;
    txt = 1;
  }
  else if(plots[0].value=="X" && plots[3].value=="X" && plots[6].value=="X")
  {
    first = -1;
    txt = 2;
  }
  else if(plots[0].value=="O" && plots[3].value=="O" && plots[6].value=="O")
  {
    first = -1;
    txt = 1;
  }
  else if(plots[1].value=="X" && plots[4].value=="X" && plots[7].value=="X")
  {
    first = -1;
    txt = 2;
  }
  else if(plots[1].value=="O" && plots[4].value=="O" && plots[7].value=="O")
  {
    first = -1;
    txt = 1;
  }
  else if(plots[2].value=="X" && plots[5].value=="X" && plots[8].value=="X")
  {
    first = -1;
    txt = 2;
  }
  else if(plots[2].value=="O" && plots[5].value=="O" && plots[8].value=="O")
  {
    first = -1;
    txt = 1;
  }
  else if(plots[0].value=="X" && plots[4].value=="X" && plots[8].value=="X")
  {
    first = -1;
    txt = 2;
  }
  else if(plots[0].value=="O" && plots[4].value=="O" && plots[8].value=="O")
  {
    first = -1;
    txt = 1;
  }
  else if(plots[2].value=="X" && plots[4].value=="X" && plots[6].value=="X")
  {
    first = -1;
    txt = 2;
  }
  else if(plots[2].value=="O" && plots[4].value=="O" && plots[6].value=="O")
  {
    first = -1;
    txt = 1;
  }
  else
  {
    let ile = 0;
    for(let p of plots)
    {
      if(p.value!=="")
      {
        ile++;
      }
    }
    if(ile==9)
    {
      first = -1;
      txt = 3;
    }
  }
}