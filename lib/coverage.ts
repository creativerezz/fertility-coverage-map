export type CoverageStatus = "mandate" | "limited" | "varies";

export interface StateCoverage {
  name: string;
  status: CoverageStatus;
  summary: string;
  details: string[];
}

export const coverageData: Record<string, StateCoverage> = {
  CA: {
    name: "California",
    status: "mandate",
    summary: "SB 729 requires large fully-insured employer plans to cover up to three egg retrievals and five years of storage.",
    details: [
      "Effective January 1, 2026",
      "101+ employees, fully insured plans",
      "Elective / social freezing not covered",
      "Self-funded plans are exempt",
    ],
  },
  IL: {
    name: "Illinois",
    status: "mandate",
    summary: "One of the strongest mandates in the country. Covers IVF and medically necessary fertility preservation.",
    details: [
      "Up to 4 egg retrievals (more if live birth occurs)",
      "Expanded to all group plans with pregnancy benefits as of Jan 1, 2026",
      "Medically necessary preservation covered",
      "Elective egg freezing generally not required",
      "Self-funded plans exempt",
    ],
  },
  NY: {
    name: "New York",
    status: "mandate",
    summary: "Requires coverage for infertility treatment and fertility preservation in large-group fully-insured plans.",
    details: [
      "Includes medically necessary egg freezing",
      "Large group plans",
      "Self-funded plans exempt",
    ],
  },
  MA: {
    name: "Massachusetts",
    status: "mandate",
    summary: "Long-standing comprehensive infertility mandate covering IVF and related services.",
    details: [
      "One of the oldest and strongest mandates",
      "Covers diagnosis and treatment including IVF",
      "Self-funded plans exempt",
    ],
  },
  CO: {
    name: "Colorado",
    status: "mandate",
    summary: "Building Families Act requires large-group plans to cover IVF and fertility preservation.",
    details: [
      "Up to 3 egg retrievals + unlimited transfers",
      "Large group fully-insured plans",
      "Self-funded plans exempt",
    ],
  },
  TX: {
    name: "Texas",
    status: "limited",
    summary: "Insurers must offer IVF coverage, but employers can decline. No broad mandate.",
    details: [
      "Offer-only requirement (not a true mandate)",
      "Fertility preservation for cancer patients in some cases",
      "Most coverage is optional / employer-dependent",
    ],
  },
  FL: {
    name: "Florida",
    status: "limited",
    summary: "Limited fertility preservation requirements for certain state plans. No broad private-plan mandate.",
    details: [
      "State group plans must cover iatrogenic preservation (2026)",
      "No comprehensive private insurance mandate",
      "Most private coverage is optional",
    ],
  },
  GA: {
    name: "Georgia",
    status: "limited",
    summary: "Requires fertility preservation for iatrogenic infertility (cancer, etc.) starting 2026.",
    details: [
      "Medically necessary egg/sperm freezing covered",
      "Applies to state-regulated individual and group plans",
      "No broad IVF mandate",
    ],
  },
  PA: {
    name: "Pennsylvania",
    status: "varies",
    summary: "No statewide fertility coverage mandate. Coverage depends entirely on the employer plan.",
    details: [
      "No private insurance mandate",
      "Self-funded and fully-insured plans vary widely",
      "Check your specific plan documents",
    ],
  },
};

export const defaultCoverage: StateCoverage = {
  name: "",
  status: "varies",
  summary: "Coverage depends on your specific employer plan. Most states do not require egg freezing benefits.",
  details: [
    "Self-funded plans are usually exempt from state mandates",
    "Medically necessary cases may differ",
    "Always verify with your plan documents",
  ],
};
