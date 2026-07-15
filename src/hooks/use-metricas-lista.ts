import {useCallback, useEffect, useMemo, useState} from 'react';
import {Alert} from 'react-native';
import {MetricasRepository} from '../repositories/metrica_repository';
import type {Metrica} from '../entities';
import {ordenarMetricasPorNome} from '../utils/metrica_ordem';

interface MetricasListaState {
  metricas: Metrica[];
  isLoading: boolean;
  recarregar: () => Promise<void>;
}

/**
 * Loads metrics table data. Owns the initial useEffect.
 */
export function useMetricasLista(): MetricasListaState {
  const [metricas, setMetricas] = useState<Metrica[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const recarregar = useCallback(async (): Promise<void> => {
    setIsLoading(true);
    try {
      const lista = await MetricasRepository.listarMetricas();
      setMetricas(ordenarMetricasPorNome(lista));
    } catch (error) {
      Alert.alert('Erro', MetricasRepository.extractApiErrorMessage(error));
      setMetricas([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    recarregar().catch(() => undefined);
  }, [recarregar]);

  return useMemo(
    () => ({
      metricas,
      isLoading,
      recarregar,
    }),
    [isLoading, metricas, recarregar],
  );
}
