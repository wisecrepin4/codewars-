function grade(score) {
  switch (true) {
    case score > 1 || score < 0.6:
      return "F";
      break;

    case score >= 0.9:
      return "A";
      break;

    case score >= 0.8:
      return "B";
      break;

    case score >= 0.7:
      return "C";
      break;

    case score >= 0.6:
      return "D";
      break;
  }
}
