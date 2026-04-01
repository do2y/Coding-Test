function solution(bandage, health, attacks) {
  const [castTime, healPerSecond, bonusHeal] = bandage;

  let hp = health;
  let prevAttackTime = 0;
  let combo = 0;

  for (let i = 0; i < attacks.length; i++) {
    const [attackTime, damage] = attacks[i];

    let gap = attackTime - prevAttackTime - 1;

    if (gap > 0) {
      for (let t = 0; t < gap; t++) {
        hp += healPerSecond;
        combo++;

        if (combo === castTime) {
          hp += bonusHeal;
          combo = 0;
        }

        if (hp > health) hp = health;
      }
    }

    hp -= damage;
    if (hp <= 0) return -1;

    combo = 0;
    prevAttackTime = attackTime;
  }

  return hp;
}