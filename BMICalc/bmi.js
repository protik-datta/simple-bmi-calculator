const bmiContainer = document.querySelector(".bmi-container");
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const bmiBtn = document.getElementById("calculate");
const bmiVal = document.getElementById("bmi-value");
const bmiStatus = document.getElementById("bmi-status");

const adviceBtn = document.getElementById("advice-btn");
const adviceContainer = document.querySelector(".advice-container");
const adviceStatus = document.getElementById("advice-status");
const adviceText = document.getElementById("advice-text");
const backBtn = document.getElementById("back-btn");

let currentBmi = null;

bmiBtn.addEventListener("click", () => {
  let height = parseInt(heightInput.value);
  let weight = parseInt(weightInput.value);

  if (!height || !weight) {
    bmiVal.textContent = "--";
    bmiStatus.textContent = "⚠️ Please enter both height and weight!";
    bmiStatus.style.color = "red";
    return;
  }
  if (height < 50 || height > 272) {
    bmiVal.textContent = "--";
    bmiStatus.textContent = "⚠️ Please enter a realistic height (50–272 cm).";
    bmiStatus.style.color = "red";
    return;
  }
  if (weight < 10 || weight > 675) {
    bmiVal.textContent = "--";
    bmiStatus.textContent = "⚠️ Please enter a realistic weight (10–635 kg).";
    bmiStatus.style.color = "red";
    return;
  }

  const heightInMeters = height / 100;

  currentBmi = parseFloat(
    (weight / (heightInMeters * heightInMeters)).toFixed(1)
  );

  bmiVal.textContent = currentBmi;

  if (currentBmi < 18.5) {
    bmiStatus.textContent =
      "You are below the healthy weight range.(🟡 Underweight)";
    bmiStatus.style.color = "yellow";
  } else if (currentBmi < 25) {
    bmiStatus.textContent =
      "You are in the healthy and normal range.(🟢 Normal weight)";
    bmiStatus.style.color = "green";
  } else if (currentBmi < 30) {
    bmiStatus.textContent =
      "You are slightly above the healthy range.(🟠 Overweight)";
    bmiStatus.style.color = "orange";
  } else if (currentBmi < 35) {
    bmiStatus.textContent =
      "Moderately obese (first stage of obesity).(🔴 Obesity Class I)";
    bmiStatus.style.color = "red";
  } else if (currentBmi < 40) {
    bmiStatus.textContent =
      "Severely obese (second stage).(🔴 Obesity Class II)";
    bmiStatus.style.color = "red";
  } else {
    bmiStatus.textContent =
      "Extremely obese (very high risk).(🔴 Obesity Class III)";
    bmiStatus.style.color = "red";
  }

  heightInput.value = "";
  weightInput.value = "";



  adviceBtn.style.display = "block";
});

adviceBtn.addEventListener("click", () => {
  bmiContainer.style.display = "none";
  adviceContainer.style.display = "block";

  let status = "";
  let currentAdvice = "";

  if (currentBmi < 18.5) {
    status = "Underweight";
    currentAdvice = `You are underweight. Follow these steps to gain healthy weight:

    1. Eat 5–6 small meals a day.
    2. Include protein-rich foods: eggs, chicken, fish.
    3. Add healthy fats: nuts, avocado, olive oil.
    4. Consume complex carbohydrates: rice, oats, whole grains.
    5. Include dairy: milk, yogurt, cheese.
    6. Avoid skipping meals.
    7. Stay hydrated but avoid excess water before meals.
    8. Strength training exercises 3–4 times a week.
    9. Get adequate sleep 7–8 hours daily.
    10. Avoid junk food; focus on nutritious calories.`;
  } else if (currentBmi < 25) {
    status = "Normal Weight";
    currentAdvice = `You have a normal weight. Maintain your health with these tips:

    1. Eat a balanced diet with fruits and vegetables.
    2. Include lean proteins daily.
    3. Avoid processed foods and excessive sugar.
    4. Drink plenty of water.
    5. Exercise 4–5 times per week.
    6. Include flexibility and strength training exercises.
    7. Sleep at least 7 hours every night.
    8. Monitor your weight regularly.
    9. Reduce stress through mindfulness or yoga.
    10. Maintain healthy portion sizes.
    11. Keep active throughout the day.
    12. Follow a sustainable, healthy lifestyle.`;
  } else if (currentBmi < 30) {
    status = "Overweight";
    currentAdvice = `You are overweight. Reduce health risks with these steps:

    1. Eat smaller, frequent meals.
    2. Include more vegetables and fruits.
    3. Choose whole grains over refined carbs.
    4. Avoid sugary drinks and processed foods.
    5. Drink plenty of water throughout the day.
    6. Exercise at least 30–45 minutes daily.
    7. Include both cardio and strength training.
    8. Monitor your calorie intake.
    9. Reduce eating late at night.
    10. Avoid excessive fats and fried foods.
    11. Sleep 7–8 hours daily.
    12. Track progress weekly to stay motivated.`;
  } else if (currentBmi < 35) {
    status = "Obesity Class I";
    currentAdvice = `Obesity Class I requires careful management:

    1. Consult a doctor for health assessment.
    2. Follow a structured diet plan.
    3. Avoid high-calorie and processed foods.
    4. Eat smaller, frequent meals.
    5. Include vegetables, fruits, and lean proteins.
    6. Drink plenty of water daily.
    7. Engage in 30–60 minutes of exercise daily.
    8. Combine cardio and resistance training.
    9. Monitor your weight and BMI regularly.
    10. Avoid sugary drinks and snacks.
    11. Ensure 7–8 hours of sleep.
    12. Consider professional guidance if necessary.`;
  } else if (currentBmi < 40) {
    status = "Obesity Class II";
    currentAdvice = `Obesity Class II needs strict medical supervision:

    1. Consult a physician for personalized advice.
    2. Follow a strict diet and exercise plan.
    3. Avoid fast food, sugary drinks, and snacks.
    4. Include high-fiber foods: vegetables, fruits, legumes.
    5. Drink adequate water daily.
    6. Exercise under supervision if needed.
    7. Combine cardio, strength, and flexibility exercises.
    8. Monitor weight and BMI frequently.
    9. Avoid skipping meals or crash diets.
    10. Sleep 7–8 hours for recovery.
    11. Manage stress with meditation or yoga.
    12. Seek ongoing professional support.`;
  } else {
    status = "Obesity Class III";
    currentAdvice = `Obesity Class III requires immediate medical attention:

    1. Consult a doctor immediately.
    2. Follow strict medical diet guidelines.
    3. Avoid all high-calorie, fried, and processed foods.
    4. Eat nutrient-dense foods: vegetables, fruits, lean proteins.
    5. Stay hydrated but avoid sugary drinks.
    6. Exercise only under medical supervision.
    7. Monitor health indicators frequently.
    8. Sleep 7–8 hours daily.
    9. Manage stress carefully.
    10. Consider professional counseling.
    11. Follow doctor's recommendations precisely.
    12. Regularly track weight and health progress.`;
  }

  adviceStatus.textContent = status;
  adviceText.textContent = currentAdvice;
});

backBtn.addEventListener("click", () => {
  adviceContainer.style.display = "none";
  bmiContainer.style.display = "block";
});
