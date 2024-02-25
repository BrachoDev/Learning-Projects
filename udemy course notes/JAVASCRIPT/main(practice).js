var loveCalc = Math.round(Math.random() * 100 + 1);

prompt("Enter your name");
prompt("Enter the name of the person you love");

if (loveCalc > 70) {
  alert(
    "You are " +
      loveCalc +
      "% compatible. You love each other like Kanye loves Kanye."
  );
} else {
  alert("You are " + loveCalc + "% compatible.");
}
