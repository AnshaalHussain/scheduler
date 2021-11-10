export function getAppointmentsForDay(state, day) {
  //... returns an array of appointments for that day
  let arrayData = [];

  //console.log("STATE", state)

  if (state.days.length < 1) {
    return arrayData;
  }

  const appointmentsArray = Object.values(state.appointments);

  //console.log("APPOINT ARRAY", appointmentsArray)

  const arrayState = state.days.filter((value) => value.name === day);

  //console.log("ARRAY STATE", arrayState)

  if (arrayState.length < 1) {
    return arrayData;
  }

  arrayState[0].appointments.forEach((value) => {
    const getAppointment = appointmentsArray.filter((x) => x.id === value);

    //console.log("GET APPOINTMENT", getAppointment)

    arrayData.push(getAppointment[0]);
  });

  //console.log("ARRAY DATA", arrayData)

  // for (let item in state.days) {
  //   console.log("TESTONE", state.days[1])
  //   if (state.days[0].name === "Monday") {
  //     console.log("TESTHERE", state.days[item].name)
  //     //arrayData = item.appointments;
  //   }
  // }

  return arrayData;
}

export function getInterview(state, interview) {

  const interviewObj = {};
  if(!interview) {
    return null;
  }
  const interviewerNum = interview.interviewer;
  const interviewerList = state.interviewers;
  //console.log("INTE", appointments.interviewer)
  //console.log("INTE", state.interviewers)
  //console.log("INTE", appointments)

  for (let item in interviewerList) {
    if (interviewerList[item].id === interviewerNum) {
      interviewObj["interviewer"] = interviewerList[item];
      interviewObj["student"] = interview.student
    }
  }

  //console.log(interviewObj)
  return interviewObj;
}
