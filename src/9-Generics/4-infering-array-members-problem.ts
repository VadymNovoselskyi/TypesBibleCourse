function bulidStat<T extends string>(stats: T[]): T[] {
  return stats;
}

export const stats = bulidStat(["PENDING", "FAILED", "SUCCESS"]);
