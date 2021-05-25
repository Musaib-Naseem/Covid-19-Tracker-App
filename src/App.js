import React,{useState} from "react";
import CountryPicker from "./Components/CountryPicker/CountryPicker";
import Cards from "./Components/Cards/Cards";
import Chart from "./Components/Chart/Chart";
import styles from "./App.module.css";
import {fetchData} from "./Components/Api";
import {Card,CardContent,Typography,Grid} from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";


const App=()=>{

const [Confirmeddata,setConfirmeddata]=useState("");
const [Recovereddata,setRecovereddata]=useState("");
const [Deathdata,setDeathddata]=useState("");
const [dateNum,setDateNum]=useState("");

// console.log(data);
// var newData;

const responseData=async()=>{

  var newData=await fetchData();
  const confirmedOne = newData.data.confirmed.value;
  const recoveredOne = newData.data.recovered.value;
  const deathsOne = newData.data.deaths.value;
  const two = newData.data.lastUpdate;
  
  setConfirmeddata(confirmedOne);
  setRecovereddata(recoveredOne);
  setDeathddata(deathsOne);
  setDateNum(two);
  console.log(two);
  

}

// console.log(newData);


responseData();

if(!Confirmeddata){

  return "loading...";

}
return(
  <>

 <div className="container2">

 {/* <h1>Data is : {data} </h1>  */}

 <div className={styles.container}>

<Grid container spacing={3} justify="center">

<Grid item component={Card} xs={10} md={3} className={cx(styles.card,styles.infected)}>

<CardContent>

 <Typography color="textSecondary" gutterBottom>Infected</Typography>
 <Typography variant="h5" >
<CountUp start={0} end={Confirmeddata} duration={2.5} separator="," />
 </Typography><br />
 <Typography color="textSecondary">{new Date(dateNum).toDateString()}</Typography>
 <Typography variant="body2">Number of active cases of Covid-19</Typography>
</CardContent>
</Grid>

<Grid item component={Card} xs={10} md={3} className={cx(styles.card,styles.recovered)}>

<CardContent>

 <Typography color="textSecondary" gutterBottom>Recovered</Typography>
 <Typography variant="h5" >
<CountUp start={0} end={Recovereddata} duration={2.5} separator="," />
 </Typography><br />
 <Typography color="textSecondary">{new Date(dateNum).toDateString()}</Typography>
 <Typography variant="body2">Number of recoveries from Covid-19</Typography>
</CardContent>
</Grid>

<Grid item component={Card} xs={10} md={3} className={cx(styles.card,styles.deaths)}>

<CardContent>

 <Typography color="textSecondary" gutterBottom>Deaths</Typography>
 <Typography variant="h5" >
<CountUp start={0} end={Deathdata} duration={2.5} separator="," />
 </Typography><br />
 <Typography color="textSecondary">{new Date(dateNum).toDateString()}</Typography>
 <Typography variant="body2">Number of deaths caused by Covid-19</Typography>
</CardContent>
</Grid>

</Grid>
 </div>
<CountryPicker />
<Chart />

 </div>

  </>
);

}

export default App;